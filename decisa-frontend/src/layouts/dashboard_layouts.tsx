import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar.tsx";
import TopBar from "../components/dashboard/topbar";
import NewPlanModal from "../pages/plans/newPlansModal.tsx";

export default function DashboardLayout() {
  const [showNewPlanModal, setShowNewPlanModal] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notification, setNotification] = useState<string | null>(null);

  const handleNewPlan = () => {
    setShowNewPlanModal(true);
  };

  const handlePlanCreated = () => {
    setNotification("Plan berhasil dibuat.");

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Sidebar */}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Main area */}

      <div className="lg:ml-64">
        <TopBar 
            onNewPlan={handleNewPlan}
            onMenuClick={() => setSidebarOpen(true)}
            notification={notification}
        />

        {/* Page content */}

        <main>
          <Outlet />
        </main>
      </div>

      {/* New Plan Modal */}

      {showNewPlanModal && (
        <NewPlanModal
          onClose={() => setShowNewPlanModal(false)}
          onCreated={handlePlanCreated}
          onUpdated={() => {}}
          editingPlan={null}
        />
      )}
    </div>
  );
}
