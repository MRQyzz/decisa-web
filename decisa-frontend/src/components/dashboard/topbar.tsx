import {
    Bell,
    CalendarDays,
    ChevronDown,
    Menu,
    Plus,
    Settings,
} from "lucide-react";

import Button from "../ui/button.tsx";

export default function TopBar() {
    return (
        <header
            className="
                w-full

                border-b
                border-white/[0.07]

                bg-[#09090b]/40
                backdrop-blur-xl
            "
        >

            {/* ================================= */}
            {/* MAIN ROW */}
            {/* ================================= */}

            <div
                className="
                    h-[52px]
                    px-5

                    flex
                    items-center
                    justify-between

                    gap-3
                "
            >

                {/* ================= LEFT ================= */}

                <div
                    className="
                        flex
                        items-center
                        gap-2.5

                        min-w-0
                    "
                >

                    {/* Mobile Menu */}

                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="
                                w-8
                                h-8
                                p-0

                                text-slate-400
                                hover:text-white
                            "
                        >
                            <Menu size={15} />
                        </Button>
                    </div>

                    {/* Breadcrumb */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2

                            min-w-0
                        "
                    >

                        <span
                            className="
                                hidden
                                sm:inline

                                whitespace-nowrap

                                text-sm
                                text-slate-400
                            "
                        >
                            Decisa AI
                        </span>

                        <span
                            className="
                                hidden
                                sm:inline

                                text-slate-600
                            "
                        >
                            /
                        </span>

                        <span
                            className="
                                whitespace-nowrap

                                text-[13px]
                                font-medium

                                tracking-[-0.01em]

                                text-slate-100
                            "
                        >
                            Dashboard
                        </span>

                    </div>

                </div>


                {/* ================= RIGHT ================= */}

                <div
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-2
                        shrink-0
                    "
                >

                    {/* Date - Desktop */}

                    <Button
                        variant="secondary"
                        size="sm"
                        leftIcon={
                            <CalendarDays size={14} />
                        }
                        rightIcon={
                            <ChevronDown size={13} />
                        }
                        className="
                            h-9
                            px-3.5
                            whitespace-nowrap
                            shrink-0
                            rounded-xl
                            text-sm
                        "
                    >
                        This Week · Aug 3 — Aug 9
                    </Button>


                    {/* New Plan - Desktop */}

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={
                            <Plus size={15} />
                        }
                        className="
                            h-9
                            px-3.5
                            whitespace-nowrap
                            shrink-0
                            rounded-xl
                        "
                    >
                        New Plan
                    </Button>

                    {/* Utils Icon */}
                    <div className="ml-1 flex items-center gap-1">
                        {/* Settings */}

                        <Button
                            variant="ghost"
                            size="sm"
                            className="
                                w-10
                                h-10
                                px-0
                                shrink-0
                            "
                        >
                            <Settings size={18} />
                        </Button>


                        {/* Notifications */}

                        <Button
                            variant="ghost"
                            size="sm"
                            className="
                                relative

                                w-10
                                h-10
                                px-0
                                shrink-0
                            "
                        >
                            <Bell size={18} />

                            <span
                                className="
                                    absolute
                                    top-1.5
                                    right-1.5

                                    w-1.5
                                    h-1.5

                                    rounded-full

                                    bg-indigo-400
                                "
                            />
                        </Button>


                        {/* Profile */}

                        <Button
                            variant="ghost"
                            size="sm"
                            className="
                                w-8
                                h-8
                                px-0

                                shrink-0

                                rounded-full

                                bg-gradient-to-br
                                from-indigo-500
                                to-violet-500

                                text-white
                            "
                        >
                            Q
                        </Button>
                    </div>
                </div>
            </div>


            {/* ================================= */}
            {/* MOBILE ACTION ROW */}
            {/* ================================= */}

            <div
                className="
                    flex
                    md:hidden

                    items-center

                    gap-2

                    px-4
                    pb-3
                    pt-1
                "
            >

                {/* Date */}

                <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={
                        <CalendarDays size={14} />
                    }
                    rightIcon={
                        <ChevronDown size={13} />
                    }
                    className="
                        flex-1
                        h-9
                        justify-center
                        whitespace-nowrap
                        rounded-xl
                        border-white/[0.08]
                        bg-white/[0.035]
                    "
                >
                    This Week
                </Button>


                {/* New Plan */}

                <Button
                    variant="primary"
                    size="sm"
                    leftIcon={
                        <Plus size={15} />
                    }
                    className="
                        h-9
                        px-4
                        shrink-0
                        rounded-xl
                    "
                >
                    New Plan
                </Button>

            </div>

        </header>
    );
}