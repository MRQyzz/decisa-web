import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard_layouts.tsx";

import Dashboard from "./pages/dashboard/dashboard.tsx";
import Plans from "./pages/plans/plans.tsx";
import Tasks from "./pages/tasks/tasks.tsx";
import Calendar from "./pages/calendar/calendar.tsx";
import Goals from "./pages/goals/goals.tsx";
import Analytics from "./pages/analytics/analytics.tsx";
import AiChat from "./pages/ai-chat/ai-chat.tsx";
import Habits from "./pages/habits/habits.tsx";
import FocusTimer from "./pages/focus-timer/focus-timer.tsx";
import Settings from "./pages/settings/settings.tsx";
import Profile from "./pages/profile/profile.tsx";

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
                    {/* Tasks */}

                    <Route
                        path="/tasks"
                        element={<Tasks />}
                    />
                    {/* Calendar */}

                    <Route
                        path="/calendar"
                        element={<Calendar />}
                    />
                    {/* Goals */}

                    <Route
                        path="/goals"
                        element={<Goals />}
                    />
                    {/* Analytics */}

                    <Route
                        path="/analytics"
                        element={<Analytics />}
                    />
                    {/* AI-Chat */}

                    <Route
                        path="/ai-chat"
                        element={<AiChat />}
                    />
                    {/* Habits */}

                    <Route
                        path="/habits"
                        element={<Habits />}
                    />
                    {/* Focus Timer */}

                    <Route
                        path="/focus-timer"
                        element={<FocusTimer />}
                    />
                    {/* Settings */}
                    <Route
                        path="/settings"
                        element={<Settings />}
                    />
                    {/* Profile */}
                    <Route
                        path="/profile"
                        element={<Profile />}
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