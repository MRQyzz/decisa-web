import { Menu, Plus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../ui/button.tsx";

interface TopBarProps {
  onNewPlan: () => void;
  notification?: string | null;
  onMenuClick: () => void;
}

const pageNames: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/plans": "Plans",
  "/tasks": "Tasks",
  "/calendar": "Calendar",
  "/goals": "Goals",
  "/ai-chat": "AI Chat",
  "/settings": "Settings",
  "/profile": "Profile",
};

function getPageName(pathname: string) {
  if (pageNames[pathname]) {
    return pageNames[pathname];
  }

  if (pathname.startsWith("/plans")) return "Plans";
  if (pathname.startsWith("/tasks")) return "Tasks";
  if (pathname.startsWith("/calendar")) return "Calendar";
  if (pathname.startsWith("/goals")) return "Goals";
  if (pathname.startsWith("/ai-chat")) return "AI Chat";
  if (pathname.startsWith("/settings")) return "Settings";
  if (pathname.startsWith("/profile")) return "Profile";

  return "Dashboard";
}

export default function TopBar({
  onNewPlan,
  notification,
  onMenuClick,
}: TopBarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = getPageName(location.pathname);

  return (
    <header
      className="
        sticky
        top-0
        z-40
        w-full
        border-b
        border-white/[0.07]
        bg-[#09090b]/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-14
          items-center
          justify-between
          gap-3
          px-4
          sm:px-5
        "
      >
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-2.5">
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="
                h-9
                w-9
                p-0
                text-slate-400
                hover:text-white
              "
              aria-label="Open navigation"
            >
              <Menu size={17} />
            </Button>
          </div>

          {/* Breadcrumb */}
          <div className="flex min-w-0 items-center gap-2">
            <span
              className="
                hidden
                whitespace-nowrap
                text-sm
                text-slate-500
                sm:inline
              "
            >
              Decisa AI
            </span>

            <span className="hidden text-slate-700 sm:inline">
              /
            </span>

            <span
              className="
                truncate
                text-[13px]
                font-medium
                tracking-[-0.01em]
                text-slate-100
              "
            >
              {currentPage}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={onNewPlan}
            leftIcon={<Plus size={15} />}
            className="
              h-9
              rounded-xl
              px-3.5
              whitespace-nowrap
            "
          >
            <span className="hidden sm:inline">
              New Plan
            </span>

            <span className="sm:hidden">
              New
            </span>
          </Button>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed right-4 top-4 z-[100] sm:right-5">
          <div
            className="
              min-w-[240px]
              rounded-xl
              border
              border-white/[0.08]
              bg-[#15151c]/95
              px-4
              py-3
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <p className="text-sm font-medium text-white">
              {notification}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Your plan has been saved successfully.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}