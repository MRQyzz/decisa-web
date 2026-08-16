import {
    CheckSquare,
    Sparkles,
    Clock3,
    Flame,
    CalendarDays,
    ChevronDown,
    ChevronRight,
    CircleCheck,
    Circle,
    Target,
    BookOpen,
    Code2,
    Dumbbell,
    Brain,
    Timer,
    Plus,
    MessageCircle,
    Lightbulb,
    ArrowUpRight,
    Activity,
} from "lucide-react";

export default function Dashboard() {
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

            {/* ================================================== */}
            {/* GREETING + OVERVIEW STATS                         */}
            {/* ================================================== */}

            <section
                className="
                    grid
                    grid-cols-1
                    2xl:grid-cols-[270px_1fr]

                    gap-5

                    mb-6
                "
            >

                {/* ================= GREETING ================= */}

                <div
                    className="
                        flex
                        flex-col
                        justify-center

                        min-h-[120px]
                    "
                >
                    <h1
                        className="
                            text-2xl
                            sm:text-[26px]

                            font-semibold
                            tracking-tight

                            text-white
                        "
                    >
                        Good Evening, Qy 👋
                    </h1>

                    <p
                        className="
                            mt-1

                            text-xs
                            text-slate-400
                        "
                    >
                        Friday, August 7, 2026
                    </p>

                    <p
                        className="
                            mt-3

                            max-w-[250px]

                            text-xs
                            italic
                            leading-relaxed

                            text-slate-500
                        "
                    >
                        "Small consistent decisions create
                        extraordinary futures."
                    </p>
                </div>


                {/* ================= STATS ================= */}

                <div
                    className="
                        grid

                        grid-cols-2
                        xl:grid-cols-4

                        gap-3
                    "
                >

                    {/* Completed Tasks */}

                    <div
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
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <span
                                className="
                                    text-[11px]
                                    text-slate-400
                                "
                            >
                                Completed Tasks
                            </span>

                            <div
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-indigo-500/10
                                    text-indigo-400
                                "
                            >
                                <CheckSquare size={16} />
                            </div>
                        </div>

                        <p
                            className="
                                mt-3

                                text-xl
                                font-semibold
                                tracking-tight

                                text-white
                            "
                        >
                            124
                        </p>

                        <p
                            className="
                                mt-1

                                text-[10px]
                                text-emerald-400
                            "
                        >
                            ↑ 18.2% vs last week
                        </p>
                    </div>


                    {/* AI Decisions */}

                    <div
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
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <span
                                className="
                                    text-[11px]
                                    text-slate-400
                                "
                            >
                                AI Decisions
                            </span>

                            <div
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-violet-500/10
                                    text-violet-400
                                "
                            >
                                <Sparkles size={16} />
                            </div>
                        </div>

                        <p
                            className="
                                mt-3

                                text-xl
                                font-semibold
                                tracking-tight

                                text-white
                            "
                        >
                            65
                        </p>

                        <p
                            className="
                                mt-1

                                text-[10px]
                                text-emerald-400
                            "
                        >
                            ↑ 12.5% vs last week
                        </p>
                    </div>


                    {/* Hours Focused */}

                    <div
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
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <span
                                className="
                                    text-[11px]
                                    text-slate-400
                                "
                            >
                                Hours Focused
                            </span>

                            <div
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-blue-500/10
                                    text-blue-400
                                "
                            >
                                <Clock3 size={16} />
                            </div>
                        </div>

                        <p
                            className="
                                mt-3

                                text-xl
                                font-semibold
                                tracking-tight

                                text-white
                            "
                        >
                            21.7h
                        </p>

                        <p
                            className="
                                mt-1

                                text-[10px]
                                text-emerald-400
                            "
                        >
                            ↑ 8.4% vs last week
                        </p>
                    </div>


                    {/* Current Streak */}

                    <div
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
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <span
                                className="
                                    text-[11px]
                                    text-slate-400
                                "
                            >
                                Current Streak
                            </span>

                            <div
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-orange-500/10
                                    text-orange-400
                                "
                            >
                                <Flame size={16} />
                            </div>
                        </div>

                        <p
                            className="
                                mt-3

                                text-xl
                                font-semibold
                                tracking-tight

                                text-white
                            "
                        >
                            29
                        </p>

                        <p
                            className="
                                mt-1

                                text-[10px]
                                text-orange-400
                            "
                        >
                            Keep it up 🔥
                        </p>
                    </div>

                </div>

            </section>


            {/* ================================================== */}
            {/* AI INSIGHT + TASKS + CALENDAR                     */}
            {/* ================================================== */}

            <section
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-12

                    gap-4

                    mb-4
                "
            >

                {/* ================= AI INSIGHT ================= */}

                <div
                    className="
                        lg:col-span-4

                        min-h-[300px]

                        rounded-2xl

                        border
                        border-indigo-400/[0.12]

                        bg-indigo-500/[0.035]

                        p-5

                        backdrop-blur-xl
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >
                        <div
                            className="
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center

                                rounded-lg

                                bg-indigo-500/10
                                text-indigo-400
                            "
                        >
                            <Sparkles size={15} />
                        </div>

                        <h2
                            className="
                                text-sm
                                font-medium
                                text-white
                            "
                        >
                            AI Insight
                        </h2>
                    </div>


                    <div className="mt-5">

                        <p
                            className="
                                text-sm
                                leading-relaxed
                                text-slate-200
                            "
                        >
                            You have 3 high priority tasks
                            today.
                        </p>

                        <p
                            className="
                                mt-3

                                text-xs
                                leading-relaxed

                                text-slate-400
                            "
                        >
                            Based on your recent patterns,
                            you're most productive during
                            the morning.
                        </p>

                    </div>


                    {/* Recommendation */}

                    <div className="mt-5">

                        <p
                            className="
                                text-[11px]
                                font-medium
                                text-slate-300
                            "
                        >
                            Recommendation
                        </p>

                        <div className="mt-3 space-y-2.5">

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <CircleCheck
                                    size={14}
                                    className="text-indigo-400"
                                />

                                <span
                                    className="
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    Finish Calculus before 2 PM
                                </span>
                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <CircleCheck
                                    size={14}
                                    className="text-indigo-400"
                                />

                                <span
                                    className="
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    Delay React UI until tomorrow
                                </span>
                            </div>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <CircleCheck
                                    size={14}
                                    className="text-indigo-400"
                                />

                                <span
                                    className="
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    Review Physics tonight
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= TODAY'S TASKS ================= */}

                <div
                    className="
                        lg:col-span-4

                        min-h-[300px]

                        rounded-2xl

                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5

                        backdrop-blur-xl
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <h2
                            className="
                                text-sm
                                font-medium
                                text-white
                            "
                        >
                            Today's Tasks
                        </h2>

                        <button
                            className="
                                text-[10px]
                                text-indigo-400
                                transition
                                hover:text-indigo-300
                            "
                        >
                            View All
                        </button>
                    </div>


                    <div className="mt-4 space-y-3">

                        {/* Task */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Circle
                                size={16}
                                className="text-slate-600"
                            />

                            <span
                                className="
                                    flex-1
                                    truncate

                                    text-xs
                                    text-slate-300
                                "
                            >
                                Finish Calculus Exercise
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    text-red-400
                                "
                            >
                                High
                            </span>
                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Circle
                                size={16}
                                className="text-slate-600"
                            />

                            <span
                                className="
                                    flex-1
                                    truncate

                                    text-xs
                                    text-slate-300
                                "
                            >
                                Read ML Paper
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    text-amber-400
                                "
                            >
                                Medium
                            </span>
                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Circle
                                size={16}
                                className="text-slate-600"
                            />

                            <span
                                className="
                                    flex-1
                                    truncate

                                    text-xs
                                    text-slate-300
                                "
                            >
                                Workout - 30 Minutes
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    text-amber-400
                                "
                            >
                                Medium
                            </span>
                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Circle
                                size={16}
                                className="text-slate-600"
                            />

                            <span
                                className="
                                    flex-1
                                    truncate

                                    text-xs
                                    text-slate-300
                                "
                            >
                                Finish React UI
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    text-emerald-400
                                "
                            >
                                Low
                            </span>
                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <Circle
                                size={16}
                                className="text-slate-600"
                            />

                            <span
                                className="
                                    flex-1
                                    truncate

                                    text-xs
                                    text-slate-300
                            "
                            >
                                Review Physics Chapter 5
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    text-emerald-400
                                "
                            >
                                Low
                            </span>
                        </div>

                    </div>


                    {/* Progress */}

                    <div className="mt-6">

                        <div
                            className="
                                flex
                                items-center
                                justify-between

                                text-[10px]
                                text-slate-500
                            "
                        >
                            <span>
                                2 / 5 tasks completed
                            </span>

                            <span>
                                40%
                            </span>
                        </div>

                        <div
                            className="
                                mt-2

                                h-1.5

                                overflow-hidden
                                rounded-full

                                bg-white/[0.06]
                            "
                        >
                            <div
                                className="
                                    h-full
                                    w-[40%]

                                    rounded-full

                                    bg-indigo-500
                                "
                            />
                        </div>

                    </div>

                </div>


                {/* ================= CALENDAR ================= */}

                <div
                    className="
                        lg:col-span-4

                        min-h-[300px]

                        rounded-2xl

                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5

                        backdrop-blur-xl
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <h2
                            className="
                                text-sm
                                font-medium
                                text-white
                            "
                        >
                            Calendar
                        </h2>

                        <button
                            className="
                                flex
                                items-center
                                gap-1

                                rounded-lg

                                border
                                border-white/[0.07]

                                px-2.5
                                py-1.5

                                text-[10px]
                                text-slate-400

                                hover:text-white
                            "
                        >
                            This Week
                            <ChevronDown size={12} />
                        </button>

                    </div>


                    {/* Days */}

                    <div
                        className="
                            mt-5

                            grid
                            grid-cols-7

                            gap-1
                        "
                    >

                        {[
                            ["Mon", "3"],
                            ["Tue", "4"],
                            ["Wed", "5"],
                            ["Thu", "6"],
                            ["Fri", "7"],
                            ["Sat", "8"],
                            ["Sun", "9"],
                        ].map(([day, date], index) => (
                            <div
                                key={day}
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    gap-2
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        text-slate-500
                                    "
                                >
                                    {day}
                                </span>

                                <div
                                    className={`
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center

                                        rounded-full

                                        text-[10px]

                                        ${
                                            index === 4
                                                ? "bg-indigo-500 text-white"
                                                : "text-slate-400"
                                        }
                                    `}
                                >
                                    {date}
                                </div>
                            </div>
                        ))}

                    </div>


                    {/* Events */}

                    <div className="mt-5 space-y-3">

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    text-[10px]
                                    text-slate-500
                                    w-14
                                "
                            >
                                10:00 AM
                            </span>

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-blue-400
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    text-slate-300
                                "
                            >
                                Calculus Class
                            </span>
                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    text-[10px]
                                    text-slate-500
                                    w-14
                                "
                            >
                                01:30 PM
                            </span>

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-violet-400
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    text-slate-300
                                "
                            >
                                Study Group
                            </span>
                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    text-[10px]
                                    text-slate-500
                                    w-14
                                "
                            >
                                07:00 PM
                            </span>

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-emerald-400
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    text-slate-300
                                "
                            >
                                Physics Review
                            </span>
                        </div>

                    </div>


                    <button
                        className="
                            mt-5

                            flex
                            items-center
                            gap-1

                            text-[10px]
                            text-indigo-400

                            hover:text-indigo-300
                        "
                    >
                        View full calendar
                        <ArrowUpRight size={12} />
                    </button>

                </div>

            </section>


            {/* ================================================== */}
            {/* PROGRESS AREA                                     */}
            {/* ================================================== */}

            <section
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-12

                    gap-4

                    mb-4
                "
            >

                {/* Weekly Progress */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl

                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >

                    <h2
                        className="
                            text-sm
                            font-medium
                            text-white
                        "
                    >
                        Weekly Progress
                    </h2>

                    <p
                        className="
                            mt-4

                            text-3xl
                            font-semibold

                            text-indigo-400
                        "
                    >
                        76%
                    </p>

                    <p
                        className="
                            mt-1
                            text-[10px]
                            text-slate-500
                        "
                    >
                        of weekly goal completed
                    </p>

                    <div
                        className="
                            mt-4
                            h-1.5
                            rounded-full
                            bg-white/[0.06]
                        "
                    >
                        <div
                            className="
                                h-full
                                w-[76%]
                                rounded-full
                                bg-indigo-500
                            "
                        />
                    </div>

                    <div
                        className="
                            mt-5

                            grid
                            grid-cols-3

                            gap-2
                        "
                    >

                        <div>
                            <p className="text-[10px] text-slate-500">
                                Math
                            </p>
                            <p className="mt-1 text-xs text-emerald-400">
                                92%
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] text-slate-500">
                                Coding
                            </p>
                            <p className="mt-1 text-xs text-indigo-400">
                                64%
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] text-slate-500">
                                Reading
                            </p>
                            <p className="mt-1 text-xs text-amber-400">
                                55%
                            </p>
                        </div>

                    </div>

                </div>


                {/* Upcoming Deadlines */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl

                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <h2 className="text-sm font-medium text-white">
                            Upcoming Deadlines
                        </h2>

                        <button className="text-[10px] text-indigo-400">
                            View All
                        </button>
                    </div>


                    <div className="mt-5 space-y-4">

                        <div className="flex items-center gap-3">
                            <Target
                                size={15}
                                className="text-blue-400"
                            />

                            <div className="flex-1">
                                <p className="text-xs text-slate-300">
                                    OSN Training Submission
                                </p>
                                <p className="mt-1 text-[10px] text-slate-500">
                                    Tomorrow
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center gap-3">
                            <BookOpen
                                size={15}
                                className="text-amber-400"
                            />

                            <div className="flex-1">
                                <p className="text-xs text-slate-300">
                                    Exchange Application
                                </p>
                                <p className="mt-1 text-[10px] text-amber-400">
                                    10 days
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center gap-3">
                            <Target
                                size={15}
                                className="text-red-400"
                            />

                            <div className="flex-1">
                                <p className="text-xs text-slate-300">
                                    Math Competition
                                </p>
                                <p className="mt-1 text-[10px] text-red-400">
                                    23 days
                                </p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Study Hours */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl

                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <div>
                            <h2 className="text-sm font-medium text-white">
                                Study Hours
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                This Week
                            </p>
                        </div>

                        <Activity
                            size={16}
                            className="text-indigo-400"
                        />
                    </div>


                    {/* Simple bar chart */}

                    <div
                        className="
                            mt-5

                            flex
                            h-[120px]

                            items-end
                            justify-between

                            gap-2
                        "
                    >
                        {[45, 62, 40, 78, 92, 55, 68].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex
                                        h-full
                                        flex-1
                                        items-end
                                    "
                                >
                                    <div
                                        className="
                                            w-full
                                            rounded-t-md
                                            bg-indigo-500/70

                                            transition
                                            hover:bg-indigo-400
                                        "
                                        style={{
                                            height: `${height}%`,
                                        }}
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <div
                        className="
                            mt-2

                            grid
                            grid-cols-7

                            text-center
                            text-[9px]
                            text-slate-600
                        "
                    >
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>

                </div>


                {/* Goal Progress */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl

                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <h2 className="text-sm font-medium text-white">
                            Goal Progress
                        </h2>

                        <button className="text-[10px] text-indigo-400">
                            View All
                        </button>
                    </div>


                    <div className="mt-5 space-y-4">

                        {[
                            ["Become Quant Developer", 61],
                            ["Learn React & Next.js", 82],
                            ["Read 30 Research Papers", 13],
                            ["Solve 500 LeetCode Problems", 45],
                        ].map(([goal, progress]) => (
                            <div key={goal}>

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >
                                    <span
                                        className="
                                            truncate
                                            text-[10px]
                                            text-slate-400
                                        "
                                    >
                                        {goal}
                                    </span>

                                    <span
                                        className="
                                            text-[10px]
                                            text-slate-500
                                        "
                                    >
                                        {progress}%
                                    </span>
                                </div>

                                <div
                                    className="
                                        mt-1.5
                                        h-1
                                        rounded-full
                                        bg-white/[0.06]
                                    "
                                >
                                    <div
                                        className="
                                            h-full
                                            rounded-full
                                            bg-indigo-500
                                        "
                                        style={{
                                            width: `${progress}%`,
                                        }}
                                    />
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================================================== */}
            {/* ACTIVITY AREA                                     */}
            {/* ================================================== */}

            <section
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-12

                    gap-4

                    mb-4
                "
            >

                {/* Recent Activities */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-white/[0.035]

                        p-5
                    "
                >

                    <div className="flex items-center justify-between">

                        <h2 className="text-sm font-medium text-white">
                            Recent Activities
                        </h2>

                        <button className="text-[10px] text-indigo-400">
                            View All
                        </button>

                    </div>


                    <div className="mt-5 space-y-4">

                        <div className="flex gap-3">
                            <CircleCheck
                                size={14}
                                className="mt-0.5 text-emerald-400"
                            />

                            <div>
                                <p className="text-[10px] text-slate-300">
                                    Completed Calculus Exercise
                                </p>
                                <p className="mt-1 text-[9px] text-slate-600">
                                    2h ago
                                </p>
                            </div>
                        </div>


                        <div className="flex gap-3">
                            <Plus
                                size={14}
                                className="mt-0.5 text-blue-400"
                            />

                            <div>
                                <p className="text-[10px] text-slate-300">
                                    Created Weekly Plan
                                </p>
                                <p className="mt-1 text-[9px] text-slate-600">
                                    4h ago
                                </p>
                            </div>
                        </div>


                        <div className="flex gap-3">
                            <Sparkles
                                size={14}
                                className="mt-0.5 text-violet-400"
                            />

                            <div>
                                <p className="text-[10px] text-slate-300">
                                    Asked AI about Physics
                                </p>
                                <p className="mt-1 text-[9px] text-slate-600">
                                    6h ago
                                </p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Habit Tracker */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-white/[0.035]

                        p-5
                    "
                >

                    <div className="flex items-center justify-between">

                        <h2 className="text-sm font-medium text-white">
                            Habit Tracker
                        </h2>

                        <span className="text-[10px] text-slate-500">
                            Today
                        </span>

                    </div>


                    <div className="mt-5 space-y-3">

                        <div className="flex items-center gap-3">
                            <BookOpen size={14} className="text-blue-400" />
                            <span className="flex-1 text-xs text-slate-400">
                                Study
                            </span>
                            <span className="text-[10px] text-orange-400">
                                🔥 7
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Code2 size={14} className="text-violet-400" />
                            <span className="flex-1 text-xs text-slate-400">
                                Coding
                            </span>
                            <span className="text-[10px] text-orange-400">
                                🔥 12
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Dumbbell size={14} className="text-emerald-400" />
                            <span className="flex-1 text-xs text-slate-400">
                                Exercise
                            </span>
                            <span className="text-[10px] text-orange-400">
                                🔥 5
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <BookOpen size={14} className="text-amber-400" />
                            <span className="flex-1 text-xs text-slate-400">
                                Reading
                            </span>
                            <span className="text-[10px] text-slate-500">
                                ○ 0
                            </span>
                        </div>

                    </div>

                </div>


                {/* AI Recommendation */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl
                        border
                        border-indigo-400/[0.10]
                        bg-indigo-500/[0.03]

                        p-5
                    "
                >

                    <div className="flex items-center gap-2">

                        <Sparkles
                            size={15}
                            className="text-indigo-400"
                        />

                        <h2 className="text-sm font-medium text-white">
                            AI Recommendation
                        </h2>

                    </div>


                    <p
                        className="
                            mt-4

                            text-[11px]
                            leading-relaxed

                            text-slate-400
                        "
                    >
                        You've been focusing a lot on
                        programming recently. Consider
                        spending more time on mathematics.
                    </p>


                    <div
                        className="
                            mt-4

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            p-3
                        "
                    >

                        <p className="text-[9px] text-slate-500">
                            Recommended Next
                        </p>

                        <p className="mt-1 text-xs text-white">
                            Linear Algebra
                        </p>

                        <p className="mt-1 text-[9px] text-slate-600">
                            Estimated Time: 2h
                        </p>

                    </div>


                    <button
                        className="
                            mt-3

                            flex
                            items-center
                            gap-1

                            text-[10px]
                            text-indigo-400
                        "
                    >
                        Start Learning
                        <ChevronRight size={12} />
                    </button>

                </div>


                {/* Focus Timer */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-white/[0.035]

                        p-5
                    "
                >

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">

                            <Timer
                                size={15}
                                className="text-indigo-400"
                            />

                            <h2 className="text-sm font-medium text-white">
                                Focus Timer
                            </h2>

                        </div>

                        <button className="text-slate-500 hover:text-white">
                            •••
                        </button>

                    </div>


                    <div className="mt-5 flex flex-col items-center">

                        <div
                            className="
                                flex
                                h-28
                                w-28

                                items-center
                                justify-center

                                rounded-full

                                border-4
                                border-indigo-400/30
                            "
                        >
                            <div className="text-center">

                                <p
                                    className="
                                        text-2xl
                                        font-medium
                                        text-white
                                    "
                                >
                                    25:00
                                </p>

                                <p className="text-[8px] text-slate-500">
                                    Start focusing!
                                </p>

                            </div>
                        </div>


                        <button
                            className="
                                mt-4

                                rounded-lg

                                bg-indigo-500

                                px-7
                                py-2

                                text-xs
                                font-medium

                                text-white

                                transition

                                hover:bg-indigo-400
                            "
                        >
                            Start
                        </button>

                        <p className="mt-2 text-[9px] text-slate-600">
                            Pomodoro
                        </p>

                    </div>

                </div>

            </section>


            {/* ================================================== */}
            {/* QUICK ACTIONS                                     */}
            {/* ================================================== */}

            <section
                className="
                    mb-4

                    rounded-2xl

                    border
                    border-white/[0.07]

                    bg-white/[0.035]

                    p-5
                "
            >

                <div className="flex items-center gap-2">

                    <Lightbulb
                        size={15}
                        className="text-indigo-400"
                    />

                    <h2 className="text-sm font-medium text-white">
                        Quick Actions
                    </h2>

                </div>


                <div
                    className="
                        mt-4

                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        lg:grid-cols-6

                        gap-2
                    "
                >

                    <button
                        className="
                            flex
                            items-center
                            gap-2

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            px-3
                            py-3

                            text-left

                            text-xs
                            text-slate-400

                            transition

                            hover:bg-white/[0.05]
                            hover:text-white
                        "
                    >
                        <Plus size={14} />
                        New Plan
                    </button>


                    <button
                        className="
                            flex
                            items-center
                            gap-2

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            px-3
                            py-3

                            text-xs
                            text-slate-400

                            transition

                            hover:bg-white/[0.05]
                            hover:text-white
                        "
                    >
                        <CheckSquare size={14} />
                        Add Task
                    </button>


                    <button
                        className="
                            flex
                            items-center
                            gap-2

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            px-3
                            py-3

                            text-xs
                            text-slate-400

                            transition

                            hover:bg-white/[0.05]
                            hover:text-white
                        "
                    >
                        <MessageCircle size={14} />
                        Ask AI
                    </button>


                    <button
                        className="
                            flex
                            items-center
                            gap-2

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            px-3
                            py-3

                            text-xs
                            text-slate-400

                            transition

                            hover:bg-white/[0.05]
                            hover:text-white
                        "
                    >
                        <Brain size={14} />
                        Analyze Decision
                    </button>


                    <button
                        className="
                            flex
                            items-center
                            gap-2

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            px-3
                            py-3

                            text-xs
                            text-slate-400

                            transition

                            hover:bg-white/[0.05]
                            hover:text-white
                        "
                    >
                        <Activity size={14} />
                        Weekly Review
                    </button>


                    <button
                        className="
                            flex
                            items-center
                            gap-2

                            rounded-xl

                            border
                            border-white/[0.06]

                            bg-white/[0.025]

                            px-3
                            py-3

                            text-xs
                            text-slate-400

                            transition

                            hover:bg-white/[0.05]
                            hover:text-white
                        "
                    >
                        <CalendarDays size={14} />
                        Schedule
                    </button>

                </div>

            </section>


            {/* ================================================== */}
            {/* ASK DECISA AI                                     */}
            {/* ================================================== */}

            <section
                className="
                    flex
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-white/[0.08]

                    bg-white/[0.04]

                    px-4
                    py-3
                "
            >

                <div
                    className="
                        flex
                        h-8
                        w-8
                        shrink-0

                        items-center
                        justify-center

                        rounded-lg

                        bg-indigo-500/10
                        text-indigo-400
                    "
                >
                    <Sparkles size={15} />
                </div>


                <div className="min-w-0 flex-1">

                    <p
                        className="
                            text-xs
                            font-medium
                            text-white
                        "
                    >
                        Ask Decisa AI
                    </p>

                    <p
                        className="
                            mt-0.5

                            truncate

                            text-[10px]
                            text-slate-500
                        "
                    >
                        What's the best thing I should do today?
                    </p>

                </div>


                <button
                    className="
                        flex
                        h-8
                        w-8
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-indigo-500

                        text-white

                        transition

                        hover:bg-indigo-400
                    "
                >
                    <ArrowUpRight size={15} />
                </button>

            </section>

        </main>
    );
}