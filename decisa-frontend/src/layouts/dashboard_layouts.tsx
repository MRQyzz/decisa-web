import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar.tsx";
import TopBar from "../components/dashboard/topbar";
import NewPlanModal from "../pages/plans/newPlansModal.tsx";

export default function DashboardLayout() {
  const [showNewPlanModal, setShowNewPlanModal] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [notification, setNotification] =
    useState<string | null>(null);

  const handlePlanCreated = () => {
    setShowNewPlanModal(false);
    setNotification("Plan berhasil dibuat.");

    window.setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#09090B]">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-h-screen lg:ml-64">
        <TopBar
          onNewPlan={() => setShowNewPlanModal(true)}
          onMenuClick={() => setSidebarOpen(true)}
          notification={notification}
        />

        <main>
          <Outlet />
        </main>
      </div>

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