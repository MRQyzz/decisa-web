import {
    BarChart3,
    CheckSquare,
    Flame,
    Clock3,
    TrendingUp,
    ChevronDown,
} from "lucide-react";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";

import Button from "../../components/ui/button.tsx";

const weeklyActivity = [
    { day: "Mon", hours: 2.4 },
    { day: "Tue", hours: 3.1 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 4.2 },
    { day: "Fri", hours: 3.6 },
    { day: "Sat", hours: 2.0 },
    { day: "Sun", hours: 1.2 },
];

const categoryBreakdown = [
    { category: "Math", hours: 9.2 },
    { category: "Coding", hours: 12.4 },
    { category: "Reading", hours: 3.6 },
    { category: "Exercise", hours: 4.1 },
];

const timeDistribution = [
    { name: "Coding", value: 38, color: "#818cf8" },
    { name: "Math", value: 28, color: "#a78bfa" },
    { name: "Exercise", value: 16, color: "#34d399" },
    { name: "Reading", value: 18, color: "#22d3ee" },
];

const stats = [
    {
        label: "Total Focus Hours",
        value: "29.4h",
        change: "↑ 12.8% vs last week",
        changeColor: "text-emerald-400",
        icon: <Clock3 size={16} />,
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/10",
    },
    {
        label: "Tasks Completed",
        value: "124",
        change: "↑ 18.2% vs last week",
        changeColor: "text-emerald-400",
        icon: <CheckSquare size={16} />,
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
    },
    {
        label: "Current Streak",
        value: "12 days",
        change: "Personal best: 21 days",
        changeColor: "text-slate-500",
        icon: <Flame size={16} />,
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10",
    },
    {
        label: "Goal Progress",
        value: "63%",
        change: "↑ 4.1% vs last week",
        changeColor: "text-emerald-400",
        icon: <TrendingUp size={16} />,
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10",
    },
];

export default function Analytics() {
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
                            Analytics
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            See how your time and effort translate into progress.
                        </p>
                    </div>

                    <Button
                        variant="secondary"
                        size="sm"
                        rightIcon={<ChevronDown size={14} />}
                        className="shrink-0"
                    >
                        This Week
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

                                    ${stat.iconBg}
                                    ${stat.iconColor}
                                `}
                            >
                                {stat.icon}
                            </div>
                        </div>

                        <p className="mt-3 text-xl font-semibold tracking-tight text-white">
                            {stat.value}
                        </p>

                        <p className={`mt-1 text-[10px] ${stat.changeColor}`}>
                            {stat.change}
                        </p>
                    </div>
                ))}
            </section>

            {/* ========================================= */}
            {/* CHARTS */}
            {/* ========================================= */}

            <section
                className="
                    grid
                    grid-cols-1
                    gap-5

                    lg:grid-cols-12
                "
            >
                {/* ================= WEEKLY ACTIVITY ================= */}

                <div
                    className="
                        lg:col-span-8

                        rounded-2xl
                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-white">
                            Weekly Activity
                        </h2>

                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            Focus Hours
                        </div>
                    </div>

                    <div className="mt-6 h-[240px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={weeklyActivity}>
                                <defs>
                                    <linearGradient id="focusGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.35} />
                                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid
                                    vertical={false}
                                    stroke="rgba(255,255,255,0.06)"
                                />

                                <XAxis
                                    dataKey="day"
                                    tick={{ fill: "#64748b", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <YAxis
                                    tick={{ fill: "#64748b", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={28}
                                />

                                <Tooltip
                                    contentStyle={{
                                        background: "#0f0f12",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "10px",
                                        fontSize: "12px",
                                        color: "#e2e8f0",
                                    }}
                                    labelStyle={{ color: "#94a3b8" }}
                                    cursor={{ stroke: "rgba(129,140,248,0.3)" }}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="hours"
                                    stroke="#818cf8"
                                    strokeWidth={2}
                                    fill="url(#focusGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* ================= TIME DISTRIBUTION ================= */}

                <div
                    className="
                        lg:col-span-4

                        rounded-2xl
                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >
                    <h2 className="text-sm font-medium text-white">
                        Time Distribution
                    </h2>

                    <div className="mt-2 h-[180px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={timeDistribution}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={48}
                                    outerRadius={70}
                                    paddingAngle={3}
                                    stroke="none"
                                >
                                    {timeDistribution.map((entry) => (
                                        <Cell key={entry.name} fill={entry.color} />
                                    ))}
                                </Pie>

                                <Tooltip
                                    contentStyle={{
                                        background: "#0f0f12",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "10px",
                                        fontSize: "12px",
                                        color: "#e2e8f0",
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-2 space-y-2.5">
                        {timeDistribution.map((entry) => (
                            <div
                                key={entry.name}
                                className="flex items-center justify-between text-xs"
                            >
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: entry.color }}
                                    />
                                    {entry.name}
                                </div>

                                <span className="font-medium text-slate-300">
                                    {entry.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= CATEGORY BREAKDOWN ================= */}

                <div
                    className="
                        lg:col-span-12

                        rounded-2xl
                        border
                        border-white/[0.07]

                        bg-white/[0.035]

                        p-5
                    "
                >
                    <div className="flex items-center gap-2">
                        <BarChart3 size={15} className="text-indigo-400" />

                        <h2 className="text-sm font-medium text-white">
                            Hours by Category
                        </h2>
                    </div>

                    <div className="mt-6 h-[220px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryBreakdown} barCategoryGap={36}>
                                <CartesianGrid
                                    vertical={false}
                                    stroke="rgba(255,255,255,0.06)"
                                />

                                <XAxis
                                    dataKey="category"
                                    tick={{ fill: "#64748b", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <YAxis
                                    tick={{ fill: "#64748b", fontSize: 11 }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={28}
                                />

                                <Tooltip
                                    contentStyle={{
                                        background: "#0f0f12",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "10px",
                                        fontSize: "12px",
                                        color: "#e2e8f0",
                                    }}
                                    cursor={{ fill: "rgba(255,255,255,0.03)" }}
                                />

                                <Bar
                                    dataKey="hours"
                                    radius={[6, 6, 0, 0]}
                                    fill="#818cf8"
                                    maxBarSize={48}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </main>
    );
}
