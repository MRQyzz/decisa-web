import {
    CalendarDays,
    ChevronDown,
    MoreHorizontal,
    Plus,
    Search,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

export default function Plans() {
    return (
        <main className="min-h-screen p-4 sm:p-6 lg:p-8">

            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <section className="mb-6">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-white">
                            Plans
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Manage your plans and stay focused on what matters.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Plus size={15} />}
                        className="shrink-0"
                    >
                        New Plan
                    </Button>

                </div>

            </section>


            {/* ========================================= */}
            {/* SEARCH & FILTER */}
            {/* ========================================= */}

            <section className="mb-6">

                <div
                    className="
                        flex
                        flex-col
                        gap-3

                        rounded-xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        p-3

                        sm:flex-row
                        sm:items-center
                    "
                >

                    {/* Search */}

                    <div className="relative flex-1">

                        <Search
                            size={16}
                            className="
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2

                                text-slate-500
                            "
                        />

                        <input
                            type="text"
                            placeholder="Search plans..."
                            className="
                                h-9
                                w-full

                                rounded-lg
                                border
                                border-white/10

                                bg-black/10

                                pl-9
                                pr-3

                                text-sm
                                text-slate-200

                                placeholder:text-slate-500

                                outline-none

                                transition

                                focus:border-indigo-400/40
                                focus:bg-white/[0.04]
                            "
                        />

                    </div>


                    {/* Filter */}

                    <Button
                        variant="secondary"
                        size="sm"
                        rightIcon={<ChevronDown size={14} />}
                        className="shrink-0"
                    >
                        All Plans
                    </Button>

                </div>

            </section>


            {/* ========================================= */}
            {/* PLAN GRID */}
            {/* ========================================= */}

            <section>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-4

                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {/* ================================= */}
                    {/* PLAN 1 */}
                    {/* ================================= */}

                    <div
                        className="
                            group

                            rounded-2xl
                            border
                            border-white/10

                            bg-white/[0.025]
                            backdrop-blur-xl

                            p-5

                            transition-all
                            duration-200

                            hover:border-indigo-400/20
                            hover:bg-white/[0.04]
                        "
                    >

                        {/* Card Header */}

                        <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">

                                <div
                                    className="
                                        mb-3
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center

                                        rounded-lg

                                        bg-indigo-500/10
                                        text-indigo-400
                                    "
                                >
                                    ✦
                                </div>

                                <h2 className="truncate text-base font-semibold text-white">
                                    Math Competition
                                </h2>

                                <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-400">
                                    Prepare for the upcoming mathematics competition.
                                </p>

                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="
                                    h-8
                                    w-8
                                    shrink-0
                                    p-0
                                "
                            >
                                <MoreHorizontal size={16} />
                            </Button>

                        </div>


                        {/* Progress */}

                        <div className="mt-6">

                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-xs text-slate-500">
                                    Progress
                                </span>

                                <span className="text-xs font-medium text-slate-300">
                                    72%
                                </span>

                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                                <div
                                    className="
                                        h-full
                                        w-[72%]
                                        rounded-full

                                        bg-gradient-to-r
                                        from-indigo-500
                                        to-violet-500
                                    "
                                />

                            </div>

                        </div>


                        {/* Footer */}

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                justify-between

                                border-t
                                border-white/5

                                pt-4
                            "
                        >

                            <span
                                className="
                                    rounded-md
                                    bg-red-400/10
                                    px-2
                                    py-1

                                    text-[11px]
                                    font-medium
                                    text-red-300
                                "
                            >
                                High
                            </span>

                            <div className="flex items-center gap-1.5 text-xs text-slate-500">

                                <CalendarDays size={13} />

                                Oct 15, 2026

                            </div>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* PLAN 2 */}
                    {/* ================================= */}

                    <div
                        className="
                            group

                            rounded-2xl
                            border
                            border-white/10

                            bg-white/[0.025]
                            backdrop-blur-xl

                            p-5

                            transition-all
                            duration-200

                            hover:border-indigo-400/20
                            hover:bg-white/[0.04]
                        "
                    >

                        <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">

                                <div
                                    className="
                                        mb-3
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center

                                        rounded-lg

                                        bg-cyan-500/10
                                        text-cyan-400
                                    "
                                >
                                    ◇
                                </div>

                                <h2 className="truncate text-base font-semibold text-white">
                                    Learn React
                                </h2>

                                <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-400">
                                    Build stronger React and TypeScript development skills.
                                </p>

                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 shrink-0 p-0"
                            >
                                <MoreHorizontal size={16} />
                            </Button>

                        </div>


                        <div className="mt-6">

                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-xs text-slate-500">
                                    Progress
                                </span>

                                <span className="text-xs font-medium text-slate-300">
                                    48%
                                </span>

                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                                <div
                                    className="
                                        h-full
                                        w-[48%]
                                        rounded-full

                                        bg-gradient-to-r
                                        from-cyan-500
                                        to-blue-500
                                    "
                                />

                            </div>

                        </div>


                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                justify-between

                                border-t
                                border-white/5

                                pt-4
                            "
                        >

                            <span
                                className="
                                    rounded-md
                                    bg-amber-400/10
                                    px-2
                                    py-1

                                    text-[11px]
                                    font-medium
                                    text-amber-300
                                "
                            >
                                Medium
                            </span>

                            <div className="flex items-center gap-1.5 text-xs text-slate-500">

                                <CalendarDays size={13} />

                                Sep 20, 2026

                            </div>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* PLAN 3 */}
                    {/* ================================= */}

                    <div
                        className="
                            group

                            rounded-2xl
                            border
                            border-white/10

                            bg-white/[0.025]
                            backdrop-blur-xl

                            p-5

                            transition-all
                            duration-200

                            hover:border-indigo-400/20
                            hover:bg-white/[0.04]
                        "
                    >

                        <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">

                                <div
                                    className="
                                        mb-3
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center

                                        rounded-lg

                                        bg-violet-500/10
                                        text-violet-400
                                    "
                                >
                                    ✧
                                </div>

                                <h2 className="truncate text-base font-semibold text-white">
                                    Build Decisa AI
                                </h2>

                                <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-400">
                                    Develop and launch the Decisa AI productivity platform.
                                </p>

                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 shrink-0 p-0"
                            >
                                <MoreHorizontal size={16} />
                            </Button>

                        </div>


                        <div className="mt-6">

                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-xs text-slate-500">
                                    Progress
                                </span>

                                <span className="text-xs font-medium text-slate-300">
                                    31%
                                </span>

                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                                <div
                                    className="
                                        h-full
                                        w-[31%]
                                        rounded-full

                                        bg-gradient-to-r
                                        from-violet-500
                                        to-purple-500
                                    "
                                />

                            </div>

                        </div>


                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                justify-between

                                border-t
                                border-white/5

                                pt-4
                            "
                        >

                            <span
                                className="
                                    rounded-md
                                    bg-red-400/10
                                    px-2
                                    py-1

                                    text-[11px]
                                    font-medium
                                    text-red-300
                                "
                            >
                                High
                            </span>

                            <div className="flex items-center gap-1.5 text-xs text-slate-500">

                                <CalendarDays size={13} />

                                Sep 30, 2026

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}