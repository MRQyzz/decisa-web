import {
    Goal as GoalIcon,
    Plus,
    Trophy,
    Target,
    TrendingUp,
    CheckCircle2,
    Circle,
    CalendarDays,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

interface Milestone {
    label: string;
    done: boolean;
}

interface GoalCard {
    icon: string;
    iconColor: string;
    iconBg: string;
    title: string;
    description: string;
    progress: number;
    barFrom: string;
    barTo: string;
    deadline: string;
    milestones: Milestone[];
}

const goals: GoalCard[] = [
    {
        icon: "🏆",
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/10",
        title: "Place Top 10 in Math Competition",
        description: "Sharpen problem-solving speed and accuracy for the regional finals.",
        progress: 68,
        barFrom: "from-indigo-500",
        barTo: "to-violet-500",
        deadline: "Oct 15, 2026",
        milestones: [
            { label: "Finish algebra & calculus review", done: true },
            { label: "Complete 5 past-year problem sets", done: true },
            { label: "Score 80%+ on mock test", done: false },
            { label: "Attend regional prep workshop", done: false },
        ],
    },
    {
        icon: "🚀",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        title: "Ship Decisa AI v1.0",
        description: "Launch a working end-to-end AI decision assistant platform.",
        progress: 82,
        barFrom: "from-violet-500",
        barTo: "to-purple-500",
        deadline: "Sep 30, 2026",
        milestones: [
            { label: "Build FastAPI + SQLite backend", done: true },
            { label: "Connect Anthropic API", done: true },
            { label: "Finish frontend page layouts", done: false },
            { label: "Deploy production build", done: false },
        ],
    },
    {
        icon: "💻",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10",
        title: "Master React & TypeScript",
        description: "Get fluent enough to build production-grade frontends independently.",
        progress: 45,
        barFrom: "from-cyan-500",
        barTo: "to-blue-500",
        deadline: "Dec 1, 2026",
        milestones: [
            { label: "Learn hooks & state management", done: true },
            { label: "Build 3 practice projects", done: false },
            { label: "Learn server components", done: false },
        ],
    },
    {
        icon: "🏃",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        title: "Stay Consistent with Exercise",
        description: "Build a sustainable habit of daily movement and fitness.",
        progress: 57,
        barFrom: "from-emerald-500",
        barTo: "to-teal-500",
        deadline: "Ongoing",
        milestones: [
            { label: "Exercise 4x per week for a month", done: true },
            { label: "Reach a 14-day streak", done: false },
        ],
    },
];

const stats = [
    {
        label: "Active Goals",
        value: "4",
        icon: <Target size={16} />,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        label: "Completed",
        value: "9",
        icon: <Trophy size={16} />,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
    },
    {
        label: "Avg. Progress",
        value: "63%",
        icon: <TrendingUp size={16} />,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
];

export default function Goals() {
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
                            Goals
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Track the milestones behind every plan.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Plus size={15} />}
                        className="shrink-0"
                    >
                        New Goal
                    </Button>
                </div>
            </section>

            {/* ========================================= */}
            {/* STATS */}
            {/* ========================================= */}

            <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="
                            flex
                            items-center
                            gap-3

                            rounded-xl
                            border
                            border-white/[0.07]

                            bg-white/[0.035]

                            p-4

                            backdrop-blur-xl
                        "
                    >
                        <div
                            className={`
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center

                                rounded-lg

                                ${stat.bg}
                                ${stat.color}
                            `}
                        >
                            {stat.icon}
                        </div>

                        <div>
                            <p className="text-lg font-semibold tracking-tight text-white">
                                {stat.value}
                            </p>

                            <p className="text-[11px] text-slate-400">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* ========================================= */}
            {/* GOAL CARDS */}
            {/* ========================================= */}

            <section
                className="
                    grid
                    grid-cols-1
                    gap-4

                    xl:grid-cols-2
                "
            >
                {goals.map((goal) => (
                    <div
                        key={goal.title}
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
                            <div className="flex items-start gap-3">
                                <div
                                    className={`
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center

                                        rounded-lg

                                        text-base

                                        ${goal.iconBg}
                                    `}
                                >
                                    {goal.icon}
                                </div>

                                <div className="min-w-0">
                                    <h2 className="text-base font-semibold text-white">
                                        {goal.title}
                                    </h2>

                                    <p className="mt-1 text-sm leading-5 text-slate-400">
                                        {goal.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Progress */}

                        <div className="mt-5">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs text-slate-500">
                                    Progress
                                </span>

                                <span className="text-xs font-medium text-slate-300">
                                    {goal.progress}%
                                </span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                                <div
                                    className={`
                                        h-full
                                        rounded-full

                                        bg-gradient-to-r
                                        ${goal.barFrom}
                                        ${goal.barTo}
                                    `}
                                    style={{ width: `${goal.progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Milestones */}

                        <div className="mt-4 space-y-2">
                            {goal.milestones.map((milestone) => (
                                <div
                                    key={milestone.label}
                                    className="flex items-center gap-2"
                                >
                                    {milestone.done ? (
                                        <CheckCircle2
                                            size={14}
                                            className="shrink-0 text-emerald-400"
                                        />
                                    ) : (
                                        <Circle
                                            size={14}
                                            className="shrink-0 text-slate-600"
                                        />
                                    )}

                                    <span
                                        className={`
                                            text-xs

                                            ${
                                                milestone.done
                                                    ? "text-slate-500 line-through"
                                                    : "text-slate-300"
                                            }
                                        `}
                                    >
                                        {milestone.label}
                                    </span>
                                </div>
                            ))}
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
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1.5

                                    rounded-md
                                    bg-white/[0.04]

                                    px-2
                                    py-1

                                    text-[11px]
                                    text-slate-400
                                "
                            >
                                <GoalIcon size={12} />
                                {goal.milestones.filter((m) => m.done).length}/
                                {goal.milestones.length} milestones
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                <CalendarDays size={13} />
                                {goal.deadline}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
