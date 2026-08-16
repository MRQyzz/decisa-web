import {
    Circle,
    CircleCheck,
    ChevronDown,
    Plus,
    Search,
    CalendarDays,
    MoreHorizontal,
    Flag,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

interface Task {
    id: string;
    title: string;
    done: boolean;
    priority: "High" | "Medium" | "Low";
    due: string;
    tag: string;
    tagColor: string;
}

const priorityStyles: Record<Task["priority"], string> = {
    High: "bg-red-400/10 text-red-300",
    Medium: "bg-amber-400/10 text-amber-300",
    Low: "bg-emerald-400/10 text-emerald-300",
};

const columns: {
    key: string;
    label: string;
    tasks: Task[];
}[] = [
    {
        key: "todo",
        label: "To Do",
        tasks: [
            {
                id: "t1",
                title: "Outline linear algebra study plan",
                done: false,
                priority: "High",
                due: "Aug 18",
                tag: "Math Competition",
                tagColor: "text-indigo-400",
            },
            {
                id: "t2",
                title: "Sketch onboarding flow for Decisa AI",
                done: false,
                priority: "Medium",
                due: "Aug 20",
                tag: "Build Decisa AI",
                tagColor: "text-violet-400",
            },
            {
                id: "t3",
                title: "Read Chapter 4 — React Server Components",
                done: false,
                priority: "Low",
                due: "Aug 22",
                tag: "Learn React",
                tagColor: "text-cyan-400",
            },
        ],
    },
    {
        key: "progress",
        label: "In Progress",
        tasks: [
            {
                id: "t4",
                title: "Build FastAPI endpoints for plans",
                done: false,
                priority: "High",
                due: "Aug 17",
                tag: "Build Decisa AI",
                tagColor: "text-violet-400",
            },
            {
                id: "t5",
                title: "Practice past competition problem sets",
                done: false,
                priority: "Medium",
                due: "Aug 19",
                tag: "Math Competition",
                tagColor: "text-indigo-400",
            },
        ],
    },
    {
        key: "done",
        label: "Done",
        tasks: [
            {
                id: "t6",
                title: "Set up SQLite schema for tasks",
                done: true,
                priority: "Medium",
                due: "Aug 14",
                tag: "Build Decisa AI",
                tagColor: "text-violet-400",
            },
            {
                id: "t7",
                title: "Review React Router v7 docs",
                done: true,
                priority: "Low",
                due: "Aug 13",
                tag: "Learn React",
                tagColor: "text-cyan-400",
            },
            {
                id: "t8",
                title: "Warm-up algebra drills",
                done: true,
                priority: "Low",
                due: "Aug 12",
                tag: "Math Competition",
                tagColor: "text-indigo-400",
            },
        ],
    },
];

function TaskCard({ task }: { task: Task }) {
    return (
        <div
            className="
                group

                rounded-xl
                border
                border-white/10

                bg-white/[0.025]
                backdrop-blur-xl

                p-4

                transition-all
                duration-200

                hover:border-indigo-400/20
                hover:bg-white/[0.04]
            "
        >
            <div className="flex items-start gap-3">
                <button className="mt-0.5 shrink-0 text-slate-500 hover:text-indigo-400">
                    {task.done ? (
                        <CircleCheck size={17} className="text-indigo-400" />
                    ) : (
                        <Circle size={17} />
                    )}
                </button>

                <div className="min-w-0 flex-1">
                    <p
                        className={`
                            text-sm
                            leading-5

                            ${
                                task.done
                                    ? "text-slate-500 line-through"
                                    : "text-slate-200"
                            }
                        `}
                    >
                        {task.title}
                    </p>

                    <p className={`mt-1.5 text-[11px] font-medium ${task.tagColor}`}>
                        {task.tag}
                    </p>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 shrink-0 p-0 opacity-0 transition group-hover:opacity-100"
                >
                    <MoreHorizontal size={15} />
                </Button>
            </div>

            <div
                className="
                    mt-3.5
                    flex
                    items-center
                    justify-between

                    border-t
                    border-white/5

                    pt-3
                "
            >
                <span
                    className={`
                        rounded-md
                        px-2
                        py-1

                        text-[10px]
                        font-medium

                        ${priorityStyles[task.priority]}
                    `}
                >
                    {task.priority}
                </span>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <CalendarDays size={12} />
                    {task.due}
                </div>
            </div>
        </div>
    );
}

export default function Tasks() {
    const totalTasks = columns.reduce((sum, c) => sum + c.tasks.length, 0);
    const doneTasks = columns
        .find((c) => c.key === "done")!
        .tasks.length;

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
                            Tasks
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            {doneTasks} of {totalTasks} tasks completed this week.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Plus size={15} />}
                        className="shrink-0"
                    >
                        New Task
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
                            placeholder="Search tasks..."
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

                    <div className="flex items-center gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            rightIcon={<ChevronDown size={14} />}
                            className="shrink-0"
                        >
                            All Plans
                        </Button>

                        <Button
                            variant="secondary"
                            size="sm"
                            leftIcon={<Flag size={13} />}
                            rightIcon={<ChevronDown size={14} />}
                            className="shrink-0"
                        >
                            Priority
                        </Button>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* TASK BOARD */}
            {/* ========================================= */}

            <section
                className="
                    grid
                    grid-cols-1
                    gap-5

                    lg:grid-cols-3
                "
            >
                {columns.map((column) => (
                    <div key={column.key} className="min-w-0">
                        <div className="mb-3 flex items-center gap-2 px-1">
                            <span
                                className={`
                                    h-1.5
                                    w-1.5
                                    rounded-full

                                    ${
                                        column.key === "todo"
                                            ? "bg-slate-500"
                                            : column.key === "progress"
                                            ? "bg-amber-400"
                                            : "bg-emerald-400"
                                    }
                                `}
                            />

                            <h2 className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                {column.label}
                            </h2>

                            <span className="text-xs text-slate-600">
                                {column.tasks.length}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {column.tasks.map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))}

                            <button
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-xl
                                    border
                                    border-dashed
                                    border-white/10

                                    py-3

                                    text-xs
                                    text-slate-500

                                    transition

                                    hover:border-white/20
                                    hover:text-slate-300
                                "
                            >
                                <Plus size={13} />
                                Add Task
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
