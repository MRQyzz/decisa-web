import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard_layouts.tsx";

import Dashboard from "./pages/dashboard/dashboard.tsx";
import Plans from "./pages/plans/plans.tsx";

export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* ================================= */}
                {/* DASHBOARD LAYOUT                   */}
                {/* ================================= */}

                <Route element={<DashboardLayout />}>

                    {/* Dashboard */}

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    {/* Plans */}

                    <Route
                        path="/plans"
                        element={<Plans />}
                    />

                </Route>


                {/* ================================= */}
                {/* DEFAULT ROUTE                     */}
                {/* ================================= */}

                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/dashboard"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}