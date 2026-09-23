import type { ReactNode } from "react";
import {
  CheckSquare,
  Goal,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Sparkles,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/auth-context";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        flex
        h-10
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        text-[13px]
        font-medium
        transition-all
        duration-200
        ${
          active
            ? "bg-indigo-500/10 text-indigo-400"
            : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
        }
      `}
    >
      <span
        className={
          active
            ? "text-indigo-400"
            : "text-slate-500 group-hover:text-slate-300"
        }
      >
        {icon}
      </span>

      {label}
    </button>
  );
}

export default function Sidebar({
  isOpen = false,
  onClose,
}: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const goTo = (path: string) => {
    navigate(path);
    onClose?.();
  };

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }

    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      onClose?.();
      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-64
          flex-col
          border-r
          border-white/[0.07]
          bg-[#09090B]
          transition-transform
          duration-200
          lg:translate-x-0
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* BRAND */}
        <div className="px-5 pb-5 pt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-400
                  to-violet-500
                  shadow-lg
                  shadow-indigo-500/20
                "
              >
                <Sparkles
                  size={18}
                  className="text-white"
                />
              </div>

              <div>
                <h1
                  className="
                    text-sm
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Decisa AI
                </h1>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  AI Decision Assistant
                </p>
              </div>
            </div>

            {/* Mobile close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close sidebar"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                text-slate-500
                transition
                hover:bg-white/[0.05]
                hover:text-white
                lg:hidden
              "
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-3">
          <p
            className="
              mb-2
              px-3
              text-[10px]
              font-medium
              uppercase
              tracking-wider
              text-slate-600
            "
          >
            Workspace
          </p>

          <div className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={17} />}
              label="Dashboard"
              active={isActive("/dashboard")}
              onClick={() => goTo("/dashboard")}
            />

            <SidebarItem
              icon={<ListTodo size={17} />}
              label="Plans"
              active={isActive("/plans")}
              onClick={() => goTo("/plans")}
            />

            <SidebarItem
              icon={<CheckSquare size={17} />}
              label="Tasks"
              active={isActive("/tasks")}
              onClick={() => goTo("/tasks")}
            />

            <SidebarItem
              icon={<Goal size={17} />}
              label="Goals"
              active={isActive("/goals")}
              onClick={() => goTo("/goals")}
            />
          </div>
        </nav>

        {/* FOOTER */}
        <div className="border-t border-white/[0.06] px-3 py-3">
          {/* LOGOUT */}
          <button
            type="button"
            onClick={handleLogout}
            className="
              group
              flex
              h-10
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              text-[13px]
              font-medium
              text-slate-400
              transition-all
              duration-200
              hover:bg-red-500/[0.06]
              hover:text-red-400
            "
          >
            <LogOut
              size={17}
              className="
                text-slate-500
                transition-colors
                group-hover:text-red-400
              "
            />

            <span>Logout</span>
          </button>

          <div className="mt-3 px-3">
            <p className="text-[10px] font-medium text-slate-600">
              Decisa AI
            </p>

            <p className="mt-1 text-[10px] text-slate-700">
              Plan smarter. Decide better.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}