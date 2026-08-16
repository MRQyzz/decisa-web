import type { ReactNode } from "react";

import {
    BookOpen,
    Code2,
    Dumbbell,
    Flame,
    Plus,
    Zap,
    Target,
    TrendingUp,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];

interface Habit {
    icon: ReactNode;
    color: string;
    bg: string;
    name: string;
    streak: number;
    best: number;
    week: boolean[];
}

const habits: Habit[] = [
    {
        icon: <BookOpen size={15} />,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        name: "Study",
        streak: 7,
        best: 21,
        week: [true, true, true, true, true, true, false],
    },
    {
        icon: <Code2 size={15} />,
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        name: "Coding",
        streak: 12,
        best: 30,
        week: [true, true, true, true, true, true, true],
    },
    {
        icon: <Dumbbell size={15} />,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        name: "Exercise",
        streak: 5,
        best: 14,
        week: [true, false, true, true, true, false, false],
    },
    {
        icon: <BookOpen size={15} />,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        name: "Reading",
        streak: 0,
        best: 9,
        week: [false, false, true, false, false, false, false],
    },
];

const stats = [
    {
        label: "Active Habits",
        value: "4",
        icon: <Zap size={16} />,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        label: "Longest Streak",
        value: "30 days",
        icon: <Flame size={16} />,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
    },
    {
        label: "This Week",
        value: "18/28",
        icon: <Target size={16} />,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        label: "Consistency",
        value: "76%",
        icon: <TrendingUp size={16} />,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
];

export default function Habits() {
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
                            Habits
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Small consistent actions, tracked day by day.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Plus size={15} />}
                        className="shrink-0"
                    >
                        New Habit
                    </Button>
                </div>
            </section>

            {/* ========================================= */}
            {/* STATS */}
            {/* ========================================= */}

            <section className="mb-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="
                            rounded-xl

                            border
                            border-white/[0.07]

                            bg-white/[0.035]

                            p-4

                            backdrop-blur-xl

                            transition
                            duration-200

                            hover:bg-white/[0.055]
                        "
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] text-slate-400">
                                {stat.label}
                            </span>

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
                        </div>

                        <p className="mt-3 text-xl font-semibold tracking-tight text-white">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </section>

            {/* ========================================= */}
            {/* HABIT LIST */}
            {/* ========================================= */}

            <section
                className="
                    rounded-2xl
                    border
                    border-white/10

                    bg-white/[0.025]
                    backdrop-blur-xl

                    p-5
                "
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-white">
                        This Week
                    </h2>

                    <div
                        className="
                            hidden
                            sm:grid
                            grid-cols-7
                            gap-2.5
                            w-[196px]
                        "
                    >
                        {weekLabels.map((day, i) => (
                            <span
                                key={i}
                                className="text-center text-[10px] text-slate-500"
                            >
                                {day}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4 divide-y divide-white/5">
                    {habits.map((habit) => (
                        <div
                            key={habit.name}
                            className="
                                flex
                                flex-col
                                gap-3

                                py-4

                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center

                                        rounded-lg

                                        ${habit.bg}
                                        ${habit.color}
                                    `}
                                >
                                    {habit.icon}
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-slate-200">
                                        {habit.name}
                                    </p>

                                    <div className="mt-0.5 flex items-center gap-1.5">
                                        {habit.streak > 0 ? (
                                            <span className="text-[11px] text-orange-400">
                                                🔥 {habit.streak} day streak
                                            </span>
                                        ) : (
                                            <span className="text-[11px] text-slate-500">
                                                ○ No active streak
                                            </span>
                                        )}

                                        <span className="text-[11px] text-slate-600">
                                            · best {habit.best}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 gap-2.5 sm:w-[196px]">
                                {habit.week.map((done, i) => (
                                    <div
                                        key={i}
                                        className={`
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center

                                            rounded-md

                                            text-[10px]
                                            font-medium

                                            transition

                                            ${
                                                done
                                                    ? `bg-gradient-to-br ${habit.bg} ${habit.color} border border-white/10`
                                                    : "border border-white/[0.06] bg-white/[0.02] text-transparent"
                                            }
                                        `}
                                    >
                                        {done ? "✓" : ""}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
