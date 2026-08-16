import {
    Timer,
    Play,
    RotateCcw,
    Settings2,
    Flame,
    Clock3,
    CheckCircle2,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

const modes = [
    { label: "Focus", minutes: 25, active: true },
    { label: "Short Break", minutes: 5, active: false },
    { label: "Long Break", minutes: 15, active: false },
];

const sessionHistory = [
    { task: "Linear Algebra Study Block", tag: "Math Competition", tagColor: "text-indigo-400", duration: "25 min", time: "Today, 9:04 AM" },
    { task: "FastAPI endpoints for plans", tag: "Build Decisa AI", tagColor: "text-violet-400", duration: "50 min", time: "Today, 1:12 PM" },
    { task: "React Server Components reading", tag: "Learn React", tagColor: "text-cyan-400", duration: "25 min", time: "Yesterday, 4:40 PM" },
    { task: "Algebra Drills", tag: "Math Competition", tagColor: "text-indigo-400", duration: "25 min", time: "Yesterday, 10:15 AM" },
];

const stats = [
    {
        label: "Sessions Today",
        value: "3",
        icon: <CheckCircle2 size={16} />,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        label: "Focus Time Today",
        value: "1h 40m",
        icon: <Clock3 size={16} />,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        label: "Current Streak",
        value: "12 days",
        icon: <Flame size={16} />,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
    },
];

export default function FocusTimer() {
    return (
        <main
            className="
                w-full
                max-w-[1600px]
                mx-auto

                px-4
                sm:px-5
                lg:px-7
                xl:px-8

                py-6
            "
        >
            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <section className="mb-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-white">
                            Focus Timer
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Stay in flow with focused, distraction-free sessions.
                        </p>
                    </div>

                    <Button
                        variant="secondary"
                        size="sm"
                        leftIcon={<Settings2 size={14} />}
                        className="shrink-0"
                    >
                        Session Settings
                    </Button>
                </div>
            </section>

            {/* ========================================= */}
            {/* CONTENT */}
            {/* ========================================= */}

            <section
                className="
                    grid
                    grid-cols-1
                    gap-5

                    lg:grid-cols-12
                "
            >
                {/* ================= TIMER ================= */}

                <div
                    className="
                        lg:col-span-7

                        flex
                        flex-col
                        items-center

                        rounded-2xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        p-8
                    "
                >
                    {/* Mode Tabs */}

                    <div
                        className="
                            flex
                            items-center
                            gap-1

                            rounded-xl
                            border
                            border-white/10

                            bg-white/[0.03]

                            p-1
                        "
                    >
                        {modes.map((mode) => (
                            <button
                                key={mode.label}
                                className={`
                                    rounded-lg

                                    px-4
                                    py-1.5

                                    text-xs
                                    font-medium

                                    transition

                                    ${
                                        mode.active
                                            ? "bg-indigo-500 text-white"
                                            : "text-slate-400 hover:text-white"
                                    }
                                `}
                            >
                                {mode.label}
                            </button>
                        ))}
                    </div>

                    {/* Timer Ring */}

                    <div className="relative mt-10 flex h-64 w-64 items-center justify-center">
                        <svg
                            viewBox="0 0 200 200"
                            className="absolute h-full w-full -rotate-90"
                        >
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="10"
                            />

                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="url(#timerGradient)"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeDasharray={2 * Math.PI * 90}
                                strokeDashoffset={2 * Math.PI * 90 * 0.28}
                            />

                            <defs>
                                <linearGradient id="timerGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#818cf8" />
                                    <stop offset="100%" stopColor="#a78bfa" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="text-center">
                            <p className="text-5xl font-semibold tracking-tight text-white">
                                18:02
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                                Linear Algebra Study Block
                            </p>
                        </div>
                    </div>

                    {/* Controls */}

                    <div className="mt-10 flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-11 w-11 p-0"
                        >
                            <RotateCcw size={17} />
                        </Button>

                        <Button
                            variant="primary"
                            size="lg"
                            leftIcon={<Play size={17} />}
                            className="
                                h-14
                                rounded-2xl
                                px-10
                            "
                        >
                            Start Focus
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-11 w-11 p-0"
                        >
                            <Settings2 size={17} />
                        </Button>
                    </div>

                    <p className="mt-5 text-[11px] text-slate-600">
                        Pomodoro · 25 min focus / 5 min break
                    </p>
                </div>

                {/* ================= SIDE PANEL ================= */}

                <div className="lg:col-span-5 space-y-5">
                    {/* Stats */}

                    <div className="grid grid-cols-3 gap-3">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="
                                    rounded-xl

                                    border
                                    border-white/[0.07]

                                    bg-white/[0.035]

                                    p-3.5

                                    backdrop-blur-xl
                                "
                            >
                                <div
                                    className={`
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center

                                        rounded-lg

                                        ${stat.bg}
                                        ${stat.color}
                                    `}
                                >
                                    {stat.icon}
                                </div>

                                <p className="mt-2.5 text-base font-semibold tracking-tight text-white">
                                    {stat.value}
                                </p>

                                <p className="mt-0.5 text-[10px] text-slate-400">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Session History */}

                    <div
                        className="
                            rounded-2xl
                            border
                            border-white/10

                            bg-white/[0.025]
                            backdrop-blur-xl

                            p-5
                        "
                    >
                        <div className="flex items-center gap-2">
                            <Timer size={15} className="text-indigo-400" />

                            <h2 className="text-sm font-medium text-white">
                                Recent Sessions
                            </h2>
                        </div>

                        <div className="mt-4 space-y-3">
                            {sessionHistory.map((session, i) => (
                                <div
                                    key={i}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-3

                                        rounded-xl
                                        border
                                        border-white/[0.05]

                                        bg-white/[0.02]

                                        px-3.5
                                        py-3
                                    "
                                >
                                    <div className="min-w-0">
                                        <p className="truncate text-xs text-slate-200">
                                            {session.task}
                                        </p>

                                        <div className="mt-1 flex items-center gap-1.5">
                                            <span
                                                className={`text-[10px] font-medium ${session.tagColor}`}
                                            >
                                                {session.tag}
                                            </span>

                                            <span className="text-[10px] text-slate-600">
                                                · {session.time}
                                            </span>
                                        </div>
                                    </div>

                                    <span
                                        className="
                                            shrink-0

                                            rounded-md
                                            bg-white/[0.05]

                                            px-2
                                            py-1

                                            text-[10px]
                                            font-medium
                                            text-slate-300
                                        "
                                    >
                                        {session.duration}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
