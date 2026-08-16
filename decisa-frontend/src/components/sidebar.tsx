import {
    BarChart3,
    Bell,
    CalendarDays,
    CheckSquare,
    CircleHelp,
    Clock3,
    Goal,
    LayoutDashboard,
    MessageSquare,
    Search,
    Settings,
    Sparkles,
    UserCircle,
    ListTodo,
    Zap,
    ChevronRight,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";






interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function SidebarItem({
    icon,
    label,
    active = false,
    onClick,
}: SidebarItemProps) {
    return (
        <button
            onClick={onClick}
            className={`
                group
                w-full
                h-9

                flex
                items-center
                gap-3

                px-3

                rounded-lg

                text-[13px]
                font-medium

                transition-all
                duration-200

                ${
                    active
                        ? `
                            bg-indigo-500/10
                            text-indigo-400
                        `
                        : `
                            text-slate-400

                            hover:bg-white/[0.04]
                            hover:text-slate-200
                        `
                }
            `}
        >
            <span
                className={`
                    transition-colors

                    ${
                        active
                            ? "text-indigo-400"
                            : "text-slate-500 group-hover:text-slate-300"
                    }
                `}
            >
                {icon}
            </span>

            <span>
                {label}
            </span>
        </button>
    );
}


export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <aside
            className="
                fixed
                left-0
                top-0
                z-50

                hidden
                lg:flex

                h-screen
                w-64

                flex-col

                border-r
                border-white/10

                bg-[#09090B]/70
                backdrop-blur-2xl
            "
        >

            {/* ================================= */}
            {/* LOGO */}
            {/* ================================= */}

            <div className="px-5 pt-5 pb-4">

                <div className="flex items-center gap-3">

                    {/* Logo Icon */}

                    <div
                        className="
                            relative

                            w-9
                            h-9

                            flex
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


                    {/* Logo Text */}

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

                        <p
                            className="
                                mt-0.5
                                text-[10px]
                                text-slate-500
                            "
                        >
                            AI Decision Assistant
                        </p>

                    </div>

                </div>

            </div>


            {/* ================================= */}
            {/* SEARCH */}
            {/* ================================= */}

            <div className="px-4 mb-5">

                <button
                    className="
                        w-full
                        h-9

                        flex
                        items-center
                        gap-2

                        px-3

                        rounded-lg

                        border
                        border-white/10

                        bg-white/[0.025]

                        text-slate-500

                        hover:border-white/15
                        hover:bg-white/[0.04]

                        transition
                    "
                >

                    <Search size={14} />

                    <span className="text-xs">
                        Search
                    </span>

                    <span
                        className="
                            ml-auto

                            px-1.5
                            py-0.5

                            rounded

                            border
                            border-white/10

                            text-[9px]
                            text-slate-600
                        "
                    >
                        ⌘K
                    </span>

                </button>

            </div>


            {/* ================================= */}
            {/* NAVIGATION */}
            {/* ================================= */}

            <nav
                className="
                    flex-1

                    px-3

                    overflow-y-auto
                "
            >

                {/* MAIN */}

                <div className="space-y-1">

                    <SidebarItem
                        icon={<LayoutDashboard size={16} />}
                        label="Dashboard"
                        active={location.pathname === "/dashboard"}
                        onClick={() => navigate("/dashboard")}
                    />

                    <SidebarItem
                        icon={<ListTodo size={16} />}
                        label="Plans"
                        active={location.pathname.startsWith("/plans")}
                        onClick={() => navigate("/plans")}
                    />

                    <SidebarItem
                        icon={<CheckSquare size={16} />}
                        label="Tasks"
                    />

                    <SidebarItem
                        icon={<CalendarDays size={16} />}
                        label="Calendar"
                    />

                    <SidebarItem
                        icon={<Goal size={16} />}
                        label="Goals"
                    />

                    <SidebarItem
                        icon={<BarChart3 size={16} />}
                        label="Analytics"
                    />

                    <SidebarItem
                        icon={<MessageSquare size={16} />}
                        label="AI Chat"
                    />

                    <SidebarItem
                        icon={<Zap size={16} />}
                        label="Habits"
                    />

                    <SidebarItem
                        icon={<Clock3 size={16} />}
                        label="Focus Timer"
                    />

                </div>


                {/* ================================= */}
                {/* SETTINGS */}
                {/* ================================= */}

                <div className="mt-7">

                    <p
                        className="
                            px-3
                            mb-2

                            text-[10px]
                            font-medium

                            text-slate-600
                        "
                    >
                        Settings
                    </p>


                    <div className="space-y-1">

                        <SidebarItem
                            icon={<Settings size={16} />}
                            label="Settings"
                        />

                        <SidebarItem
                            icon={<UserCircle size={16} />}
                            label="Profile"
                        />

                    </div>

                </div>

            </nav>


            {/* ================================= */}
            {/* UPGRADE CARD */}
            {/* ================================= */}

            <div className="px-3 pb-3">

                <div
                    className="
                        p-4

                        rounded-xl

                        border
                        border-indigo-500/10

                        bg-indigo-500/[0.04]
                    "
                >

                    <div className="flex items-start gap-3">

                        <div
                            className="
                                w-7
                                h-7

                                shrink-0

                                flex
                                items-center
                                justify-center

                                rounded-lg

                                bg-indigo-500/10

                                text-indigo-400
                            "
                        >
                            <Sparkles size={14} />
                        </div>


                        <div>

                            <p
                                className="
                                    text-xs
                                    font-semibold
                                    text-white
                                "
                            >
                                Upgrade to Pro
                            </p>

                            <p
                                className="
                                    mt-1

                                    text-[10px]
                                    leading-relaxed

                                    text-slate-500
                                "
                            >
                                Unlock unlimited AI insights,
                                advanced analytics, and more.
                            </p>

                        </div>

                    </div>


                    <button
                        className="
                            mt-3

                            w-full
                            h-8

                            rounded-lg

                            bg-indigo-500

                            text-[11px]
                            font-medium
                            text-white

                            hover:bg-indigo-400

                            transition
                        "
                    >
                        Upgrade Now
                    </button>

                </div>

            </div>


            {/* ================================= */}
            {/* HELP */}
            {/* ================================= */}

            <div className="px-3 pb-4">

                <button
                    className="
                        w-full
                        h-9

                        flex
                        items-center
                        gap-3

                        px-3

                        rounded-lg

                        text-xs
                        text-slate-500

                        hover:bg-white/[0.04]
                        hover:text-slate-300

                        transition
                    "
                >

                    <CircleHelp size={16} />

                    <span>
                        Help & Support
                    </span>

                    <ChevronRight
                        size={14}
                        className="ml-auto"
                    />

                </button>

            </div>

        </aside>
    );
}