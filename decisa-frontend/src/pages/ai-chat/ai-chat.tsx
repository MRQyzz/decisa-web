import {
    Sparkles,
    Plus,
    Search,
    Send,
    MessageSquare,
    Lightbulb,
    BarChart3,
    Target,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

interface ChatHistoryItem {
    title: string;
    time: string;
    active?: boolean;
}

const chatHistory: ChatHistoryItem[] = [
    { title: "Should I switch study plans?", time: "2h ago", active: true },
    { title: "Weekly review — Aug 4", time: "Yesterday" },
    { title: "Break down Decisa AI launch", time: "2 days ago" },
    { title: "Prioritizing math vs coding", time: "4 days ago" },
    { title: "Building a study habit", time: "1 week ago" },
];

const suggestions = [
    {
        icon: <Lightbulb size={14} />,
        label: "What should I focus on today?",
    },
    {
        icon: <BarChart3 size={14} />,
        label: "Summarize my week's progress",
    },
    {
        icon: <Target size={14} />,
        label: "Help me break down a new goal",
    },
];

export default function AiChat() {
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
                            AI Chat
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Talk through decisions with your AI assistant.
                        </p>
                    </div>

                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Plus size={15} />}
                        className="shrink-0"
                    >
                        New Chat
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
                {/* ================= HISTORY SIDEBAR ================= */}

                <div
                    className="
                        lg:col-span-3

                        rounded-2xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        p-4

                        lg:h-[620px]
                    "
                >
                    <div className="relative">
                        <Search
                            size={14}
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
                            placeholder="Search conversations..."
                            className="
                                h-9
                                w-full

                                rounded-lg
                                border
                                border-white/10

                                bg-black/10

                                pl-8
                                pr-3

                                text-xs
                                text-slate-200

                                placeholder:text-slate-500

                                outline-none

                                transition

                                focus:border-indigo-400/40
                                focus:bg-white/[0.04]
                            "
                        />
                    </div>

                    <div className="mt-4 space-y-1">
                        {chatHistory.map((chat) => (
                            <button
                                key={chat.title}
                                className={`
                                    w-full

                                    rounded-lg

                                    px-3
                                    py-2.5

                                    text-left

                                    transition

                                    ${
                                        chat.active
                                            ? "bg-indigo-500/10"
                                            : "hover:bg-white/[0.04]"
                                    }
                                `}
                            >
                                <p
                                    className={`
                                        truncate
                                        text-xs
                                        font-medium

                                        ${
                                            chat.active
                                                ? "text-indigo-300"
                                                : "text-slate-300"
                                        }
                                    `}
                                >
                                    {chat.title}
                                </p>

                                <p className="mt-0.5 text-[10px] text-slate-500">
                                    {chat.time}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= CHAT WINDOW ================= */}

                <div
                    className="
                        lg:col-span-9

                        flex
                        flex-col

                        rounded-2xl
                        border
                        border-white/10

                        bg-white/[0.025]
                        backdrop-blur-xl

                        lg:h-[620px]
                    "
                >
                    {/* Messages */}

                    <div className="flex-1 space-y-5 overflow-y-auto p-5">
                        {/* AI Message */}

                        <div className="flex items-start gap-3">
                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-gradient-to-br
                                    from-indigo-400
                                    to-violet-500
                                "
                            >
                                <Sparkles size={14} className="text-white" />
                            </div>

                            <div
                                className="
                                    max-w-[80%]

                                    rounded-2xl
                                    rounded-tl-sm

                                    border
                                    border-white/[0.06]

                                    bg-white/[0.03]

                                    px-4
                                    py-3

                                    text-sm
                                    leading-relaxed

                                    text-slate-300
                                "
                            >
                                Hey Qy 👋 — you've logged 29.4 focus hours this week,
                                mostly on coding. Want a quick breakdown of how that's
                                affecting your Math Competition goal?
                            </div>
                        </div>

                        {/* User Message */}

                        <div className="flex items-start justify-end gap-3">
                            <div
                                className="
                                    max-w-[80%]

                                    rounded-2xl
                                    rounded-tr-sm

                                    bg-gradient-to-r
                                    from-indigo-500
                                    to-violet-500

                                    px-4
                                    py-3

                                    text-sm
                                    leading-relaxed

                                    text-white
                                "
                            >
                                Yeah, I think I've been neglecting math this week.
                            </div>

                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-white/10

                                    text-xs
                                    font-medium
                                    text-slate-300
                                "
                            >
                                Q
                            </div>
                        </div>

                        {/* AI Message */}

                        <div className="flex items-start gap-3">
                            <div
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-lg

                                    bg-gradient-to-br
                                    from-indigo-400
                                    to-violet-500
                                "
                            >
                                <Sparkles size={14} className="text-white" />
                            </div>

                            <div
                                className="
                                    max-w-[80%]

                                    rounded-2xl
                                    rounded-tl-sm

                                    border
                                    border-white/[0.06]

                                    bg-white/[0.03]

                                    px-4
                                    py-3

                                    text-sm
                                    leading-relaxed

                                    text-slate-300
                                "
                            >
                                That checks out — only 28% of your time went to Math
                                this week. I'd suggest blocking 2 hours tomorrow
                                morning for Linear Algebra before the mock test on
                                Aug 20. Want me to add it to your calendar?
                            </div>
                        </div>
                    </div>

                    {/* Suggestions */}

                    <div className="flex flex-wrap gap-2 px-5 pb-3">
                        {suggestions.map((s) => (
                            <button
                                key={s.label}
                                className="
                                    flex
                                    items-center
                                    gap-1.5

                                    rounded-full
                                    border
                                    border-white/10

                                    bg-white/[0.03]

                                    px-3
                                    py-1.5

                                    text-[11px]
                                    text-slate-400

                                    transition

                                    hover:bg-white/[0.06]
                                    hover:text-white
                                "
                            >
                                {s.icon}
                                {s.label}
                            </button>
                        ))}
                    </div>

                    {/* Input */}

                    <div className="border-t border-white/[0.07] p-4">
                        <div
                            className="
                                flex
                                items-center
                                gap-2

                                rounded-xl
                                border
                                border-white/10

                                bg-black/10

                                px-3
                                py-2
                            "
                        >
                            <MessageSquare
                                size={15}
                                className="shrink-0 text-slate-500"
                            />

                            <input
                                type="text"
                                placeholder="Ask Decisa anything..."
                                className="
                                    h-8
                                    w-full

                                    bg-transparent

                                    text-sm
                                    text-slate-200

                                    placeholder:text-slate-500

                                    outline-none
                                "
                            />

                            <Button
                                variant="primary"
                                size="sm"
                                className="h-8 w-8 shrink-0 p-0"
                            >
                                <Send size={14} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
