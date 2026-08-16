import {
    MapPin,
    CalendarDays,
    Link as LinkIcon,
    Settings2,
    Flame,
    CheckSquare,
    Target,
    Trophy,
    BookOpen,
    Code2,
    Dumbbell,
    Sparkles,
    Award,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

const stats = [
    {
        label: "Tasks Completed",
        value: "312",
        icon: <CheckSquare size={16} />,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        label: "Goals Achieved",
        value: "9",
        icon: <Target size={16} />,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        label: "Longest Streak",
        value: "30 days",
        icon: <Flame size={16} />,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
    },
    {
        label: "Focus Hours",
        value: "184h",
        icon: <Sparkles size={16} />,
        color: "text-violet-400",
        bg: "bg-violet-500/10",
    },
];

const achievements = [
    {
        icon: "🏆",
        title: "30-Day Streak",
        description: "Kept the Coding habit alive for a full month.",
        earned: true,
    },
    {
        icon: "🎯",
        title: "Goal Getter",
        description: "Completed 5 goals in a single quarter.",
        earned: true,
    },
    {
        icon: "🚀",
        title: "Shipped It",
        description: "Launched a project end-to-end with Decisa AI.",
        earned: true,
    },
    {
        icon: "🌙",
        title: "Night Owl",
        description: "Logged focus sessions after 10 PM, 10 times.",
        earned: false,
    },
    {
        icon: "📚",
        title: "Deep Reader",
        description: "Finished 3 books tracked in your reading habit.",
        earned: false,
    },
    {
        icon: "⚡",
        title: "Century Club",
        description: "Completed 100 tasks.",
        earned: true,
    },
];

const activity = [
    {
        icon: <CheckSquare size={13} />,
        color: "text-indigo-400",
        text: "Completed \"Set up SQLite schema for tasks\"",
        time: "2h ago",
    },
    {
        icon: <Code2 size={13} />,
        color: "text-violet-400",
        text: "Logged a 50 min Coding focus session",
        time: "5h ago",
    },
    {
        icon: <Trophy size={13} />,
        color: "text-amber-400",
        text: "Reached a 12-day streak on Coding",
        time: "1 day ago",
    },
    {
        icon: <BookOpen size={13} />,
        color: "text-blue-400",
        text: "Completed \"Review React Router v7 docs\"",
        time: "2 days ago",
    },
    {
        icon: <Dumbbell size={13} />,
        color: "text-emerald-400",
        text: "Logged an Exercise session — 30 min",
        time: "2 days ago",
    },
];

export default function Profile() {
    return (
        <main
            className="
                w-full
                max-w-[1200px]
                mx-auto

                px-4
                sm:px-5
                lg:px-7

                py-6
            "
        >
            {/* ========================================= */}
            {/* PROFILE HEADER */}
            {/* ========================================= */}

            <section
                className="
                    relative

                    mb-6

                    overflow-hidden

                    rounded-2xl
                    border
                    border-white/10

                    bg-white/[0.025]
                    backdrop-blur-xl
                "
            >
                {/* Cover */}

                <div
                    className="
                        h-28
                        w-full

                        bg-gradient-to-r
                        from-indigo-500/30
                        via-violet-500/20
                        to-transparent
                    "
                />

                <div className="px-5 pb-5 sm:px-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex items-end gap-4 -mt-10">
                            <div
                                className="
                                    flex
                                    h-20
                                    w-20
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-2xl

                                    border-4
                                    border-[#09090b]

                                    bg-gradient-to-br
                                    from-indigo-500
                                    to-violet-500

                                    text-2xl
                                    font-semibold
                                    text-white
                                "
                            >
                                Q
                            </div>

                            <div className="pb-1">
                                <h1 className="text-xl font-semibold tracking-tight text-white">
                                    Qy
                                </h1>

                                <p className="mt-0.5 text-xs text-slate-400">
                                    Building Decisa AI · Student
                                </p>
                            </div>
                        </div>

                        <Button
                            variant="secondary"
                            size="sm"
                            leftIcon={<Settings2 size={14} />}
                            className="shrink-0"
                        >
                            Edit Profile
                        </Button>
                    </div>

                    <p
                        className="
                            mt-4
                            max-w-xl

                            text-sm
                            leading-relaxed

                            text-slate-400
                        "
                    >
                        Building things for fun — from physics simulations to RC
                        aircraft to a full-stack AI decision assistant. Currently
                        deep in shipping Decisa AI end-to-end.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <MapPin size={13} />
                            Indonesia
                        </div>

                        <div className="flex items-center gap-1.5">
                            <CalendarDays size={13} />
                            Joined March 2026
                        </div>

                        <div className="flex items-center gap-1.5">
                            <LinkIcon size={13} />
                            <span className="text-indigo-400">
                                github.com/MRQyzz
                            </span>
                        </div>
                    </div>
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
                {/* ================= ACHIEVEMENTS ================= */}

                <div
                    className="
                        lg:col-span-7

                        rounded-2xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        p-5
                    "
                >
                    <div className="flex items-center gap-2">
                        <Award size={15} className="text-indigo-400" />

                        <h2 className="text-sm font-medium text-white">
                            Achievements
                        </h2>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {achievements.map((a) => (
                            <div
                                key={a.title}
                                className={`
                                    flex
                                    items-start
                                    gap-3

                                    rounded-xl
                                    border

                                    p-3.5

                                    ${
                                        a.earned
                                            ? "border-white/[0.07] bg-white/[0.03]"
                                            : "border-white/[0.04] bg-white/[0.01] opacity-50"
                                    }
                                `}
                            >
                                <span className="text-xl leading-none">
                                    {a.icon}
                                </span>

                                <div className="min-w-0">
                                    <p className="text-xs font-medium text-slate-200">
                                        {a.title}
                                    </p>

                                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                                        {a.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RECENT ACTIVITY ================= */}

                <div
                    className="
                        lg:col-span-5

                        rounded-2xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        p-5
                    "
                >
                    <h2 className="text-sm font-medium text-white">
                        Recent Activity
                    </h2>

                    <div className="mt-4 space-y-4">
                        {activity.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div
                                    className={`mt-0.5 shrink-0 ${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs leading-relaxed text-slate-300">
                                        {item.text}
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-slate-600">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
