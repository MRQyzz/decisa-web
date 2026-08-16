import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar.tsx";
import TopBar from "../components/dashboard/topbar.tsx";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen">

            {/* ================================= */}
            {/* SIDEBAR */}
            {/* ================================= */}

            <Sidebar />


            {/* ================================= */}
            {/* MAIN AREA */}
            {/* ================================= */}

            <div className="lg:ml-64">

                {/* Top Bar */}

                <TopBar />


                {/* Page Content */}

                <main>
                    <Outlet />
                </main>

            </div>

        </div>
    );
}