import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Landing from "./pages/landing/landing.tsx";
import Login from "./pages/auth/login.tsx";
import Register from "./pages/auth/register.tsx";
import ProtectedRoute from "./components/auth/protected-route.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/ai-chat" element={<AiChat />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/focus-timer" element={<FocusTimer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
