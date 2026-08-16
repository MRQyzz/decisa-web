import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Clock3,
    CircleDot,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const weeks: number[][] = [
    [0, 0, 0, 0, 0, 0, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 0, 0, 0, 0, 0],
];

interface DayEvent {
    label: string;
    color: string;
}

const eventsByDay: Record<number, DayEvent[]> = {
    7: [{ label: "Math Competition Prep", color: "bg-indigo-400" }],
    12: [{ label: "React Study Session", color: "bg-cyan-400" }],
    16: [
        { label: "Decisa AI Sprint Review", color: "bg-violet-400" },
        { label: "Algebra Drills", color: "bg-indigo-400" },
    ],
    20: [{ label: "Mock Competition Test", color: "bg-red-400" }],
    24: [{ label: "1:1 with Mentor", color: "bg-emerald-400" }],
};

const todaysAgenda = [
    {
        time: "09:00 AM",
        title: "Linear Algebra Study Block",
        tag: "Math Competition",
        tagColor: "text-indigo-400",
    },
    {
        time: "01:00 PM",
        title: "Build FastAPI endpoints for plans",
        tag: "Build Decisa AI",
        tagColor: "text-violet-400",
    },
    {
        time: "04:30 PM",
        title: "React Server Components reading",
        tag: "Learn React",
        tagColor: "text-cyan-400",
    },
    {
        time: "07:00 PM",
        title: "Evening run — 30 min",
        tag: "Habits",
        tagColor: "text-emerald-400",
    },
];

export default function Calendar() {
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
                            Calendar
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Keep track of study sessions, deadlines, and events.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Plus size={15} />}
                        className="shrink-0"
                    >
                        New Event
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
                {/* ================= MONTH GRID ================= */}

                <div
                    className="
                        lg:col-span-8

                        rounded-2xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        p-5
                    "
                >
                    {/* Month Nav */}

                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold text-white">
                            August 2026
                        </h2>

                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                            >
                                <ChevronLeft size={16} />
                            </Button>

                            <Button
                                variant="secondary"
                                size="sm"
                                className="h-8 px-3 text-xs"
                            >
                                Today
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                            >
                                <ChevronRight size={16} />
                            </Button>
                        </div>
                    </div>

                    {/* Weekday Labels */}

                    <div className="mt-5 grid grid-cols-7 gap-1.5">
                        {weekdays.map((day) => (
                            <div
                                key={day}
                                className="
                                    py-1
                                    text-center

                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-wide

                                    text-slate-500
                                "
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Day Cells */}

                    <div className="mt-1.5 grid grid-cols-7 gap-1.5">
                        {weeks.flatMap((week, wi) =>
                            week.map((day, di) => {
                                const isToday = day === 7;
                                const events = day ? eventsByDay[day] : undefined;

                                return (
                                    <div
                                        key={`${wi}-${di}`}
                                        className={`
                                            min-h-[76px]
                                            sm:min-h-[92px]

                                            rounded-lg

                                            p-1.5

                                            ${
                                                day
                                                    ? isToday
                                                        ? "border border-indigo-400/30 bg-indigo-500/[0.06]"
                                                        : "border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.035]"
                                                    : ""
                                            }

                                            transition
                                        `}
                                    >
                                        {day > 0 && (
                                            <>
                                                <span
                                                    className={`
                                                        text-[11px]

                                                        ${
                                                            isToday
                                                                ? "font-semibold text-indigo-300"
                                                                : "text-slate-400"
                                                        }
                                                    `}
                                                >
                                                    {day}
                                                </span>

                                                <div className="mt-1 space-y-1">
                                                    {events?.slice(0, 2).map((event, i) => (
                                                        <div
                                                            key={i}
                                                            className="
                                                                hidden
                                                                sm:flex

                                                                items-center
                                                                gap-1

                                                                truncate

                                                                rounded
                                                                bg-white/[0.04]

                                                                px-1
                                                                py-0.5

                                                                text-[9px]
                                                                text-slate-300
                                                            "
                                                        >
                                                            <span
                                                                className={`h-1.5 w-1.5 shrink-0 rounded-full ${event.color}`}
                                                            />
                                                            <span className="truncate">
                                                                {event.label}
                                                            </span>
                                                        </div>
                                                    ))}

                                                    {events && (
                                                        <div className="flex gap-1 sm:hidden">
                                                            {events.map((event, i) => (
                                                                <span
                                                                    key={i}
                                                                    className={`h-1.5 w-1.5 rounded-full ${event.color}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* ================= TODAY'S AGENDA ================= */}

                <div
                    className="
                        lg:col-span-4

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
                            Friday, Aug 7
                        </h2>

                        <span className="text-[10px] text-slate-500">
                            Today
                        </span>
                    </div>

                    <div className="mt-5 space-y-4">
                        {todaysAgenda.map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="flex flex-col items-center pt-0.5">
                                    <CircleDot
                                        size={13}
                                        className="text-indigo-400"
                                    />
                                    {i < todaysAgenda.length - 1 && (
                                        <div className="mt-1 h-full w-px flex-1 bg-white/10" />
                                    )}
                                </div>

                                <div className="min-w-0 pb-1">
                                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                                        <Clock3 size={11} />
                                        {item.time}
                                    </div>

                                    <p className="mt-1 truncate text-xs text-slate-200">
                                        {item.title}
                                    </p>

                                    <p
                                        className={`mt-0.5 text-[10px] font-medium ${item.tagColor}`}
                                    >
                                        {item.tag}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="
                            mt-2
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2

                            rounded-xl
                            border
                            border-dashed
                            border-white/10

                            py-2.5

                            text-xs
                            text-slate-500

                            transition

                            hover:border-white/20
                            hover:text-slate-300
                        "
                    >
                        <Plus size={13} />
                        Add Event
                    </button>
                </div>
            </section>
        </main>
    );
}
