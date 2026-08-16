import { useState } from "react";
import type { ReactNode } from "react";

import {
    UserCircle,
    Bell,
    Palette,
    ShieldCheck,
    Trash2,
    ChevronDown,
} from "lucide-react";

import Button from "../../components/ui/button.tsx";

function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <button
            onClick={() => setChecked((c) => !c)}
            className={`
                relative

                h-5
                w-9

                shrink-0

                rounded-full

                transition-colors
                duration-200

                ${checked ? "bg-indigo-500" : "bg-white/10"}
            `}
        >
            <span
                className={`
                    absolute
                    top-0.5

                    h-4
                    w-4

                    rounded-full

                    bg-white

                    transition-transform
                    duration-200

                    ${checked ? "translate-x-[18px]" : "translate-x-0.5"}
                `}
            />
        </button>
    );
}

function SettingsRow({
    label,
    description,
    control,
}: {
    label: string;
    description: string;
    control: ReactNode;
}) {
    return (
        <div
            className="
                flex
                items-center
                justify-between
                gap-4

                border-b
                border-white/5

                py-4

                last:border-none
            "
        >
            <div className="min-w-0">
                <p className="text-sm text-slate-200">{label}</p>

                <p className="mt-0.5 text-xs text-slate-500">
                    {description}
                </p>
            </div>

            <div className="shrink-0">{control}</div>
        </div>
    );
}

function SettingsSection({
    icon,
    iconColor,
    iconBg,
    title,
    children,
}: {
    icon: ReactNode;
    iconColor: string;
    iconBg: string;
    title: string;
    children: ReactNode;
}) {
    return (
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
            <div className="flex items-center gap-2.5">
                <div
                    className={`
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center

                        rounded-lg

                        ${iconBg}
                        ${iconColor}
                    `}
                >
                    {icon}
                </div>

                <h2 className="text-sm font-semibold text-white">
                    {title}
                </h2>
            </div>

            <div className="mt-2">{children}</div>
        </div>
    );
}

export default function Settings() {
    return (
        <main
            className="
                w-full
                max-w-[900px]
                mx-auto

                px-4
                sm:px-5
                lg:px-7

                py-6
            "
        >
            {/* ========================================= */}
            {/* HEADER */}
            {/* ========================================= */}

            <section className="mb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                    Settings
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                    Manage your account, preferences, and app behavior.
                </p>
            </section>

            {/* ========================================= */}
            {/* SECTIONS */}
            {/* ========================================= */}

            <section className="space-y-5">
                {/* ================= PROFILE ================= */}

                <SettingsSection
                    icon={<UserCircle size={16} />}
                    iconColor="text-indigo-400"
                    iconBg="bg-indigo-500/10"
                    title="Profile"
                >
                    <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
                        <div
                            className="
                                flex
                                h-16
                                w-16
                                shrink-0
                                items-center
                                justify-center

                                rounded-full

                                bg-gradient-to-br
                                from-indigo-500
                                to-violet-500

                                text-xl
                                font-semibold
                                text-white
                            "
                        >
                            Q
                        </div>

                        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                            <div>
                                <label className="text-xs text-slate-500">
                                    Display Name
                                </label>

                                <input
                                    type="text"
                                    defaultValue="Qy"
                                    className="
                                        mt-1.5
                                        h-9
                                        w-full

                                        rounded-lg
                                        border
                                        border-white/10

                                        bg-black/10

                                        px-3

                                        text-sm
                                        text-slate-200

                                        outline-none

                                        transition

                                        focus:border-indigo-400/40
                                        focus:bg-white/[0.04]
                                    "
                                />
                            </div>

                            <div>
                                <label className="text-xs text-slate-500">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    defaultValue="qy@decisa.ai"
                                    className="
                                        mt-1.5
                                        h-9
                                        w-full

                                        rounded-lg
                                        border
                                        border-white/10

                                        bg-black/10

                                        px-3

                                        text-sm
                                        text-slate-200

                                        outline-none

                                        transition

                                        focus:border-indigo-400/40
                                        focus:bg-white/[0.04]
                                    "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end border-t border-white/5 pt-4">
                        <Button variant="primary" size="sm">
                            Save Changes
                        </Button>
                    </div>
                </SettingsSection>

                {/* ================= NOTIFICATIONS ================= */}

                <SettingsSection
                    icon={<Bell size={16} />}
                    iconColor="text-amber-400"
                    iconBg="bg-amber-500/10"
                    title="Notifications"
                >
                    <SettingsRow
                        label="Daily Summary"
                        description="Get a recap of your tasks and progress each evening."
                        control={<Toggle defaultChecked />}
                    />

                    <SettingsRow
                        label="AI Recommendations"
                        description="Receive suggestions when Decisa AI finds a better plan."
                        control={<Toggle defaultChecked />}
                    />

                    <SettingsRow
                        label="Deadline Reminders"
                        description="Get notified 24 hours before a task or plan is due."
                        control={<Toggle defaultChecked />}
                    />

                    <SettingsRow
                        label="Habit Streak Alerts"
                        description="Get a nudge before a streak is about to break."
                        control={<Toggle />}
                    />
                </SettingsSection>

                {/* ================= APPEARANCE ================= */}

                <SettingsSection
                    icon={<Palette size={16} />}
                    iconColor="text-violet-400"
                    iconBg="bg-violet-500/10"
                    title="Appearance"
                >
                    <SettingsRow
                        label="Theme"
                        description="Decisa AI is currently optimized for dark mode."
                        control={
                            <Button
                                variant="secondary"
                                size="sm"
                                rightIcon={<ChevronDown size={13} />}
                                className="h-8 px-3 text-xs"
                            >
                                Dark
                            </Button>
                        }
                    />

                    <SettingsRow
                        label="Accent Color"
                        description="Used across buttons, progress bars, and highlights."
                        control={
                            <div className="flex items-center gap-2">
                                <span className="h-5 w-5 rounded-full bg-indigo-500 ring-2 ring-white/40" />
                                <span className="h-5 w-5 rounded-full bg-cyan-500" />
                                <span className="h-5 w-5 rounded-full bg-emerald-500" />
                                <span className="h-5 w-5 rounded-full bg-rose-500" />
                            </div>
                        }
                    />

                    <SettingsRow
                        label="Compact Sidebar"
                        description="Collapse the sidebar labels to icons only."
                        control={<Toggle />}
                    />
                </SettingsSection>

                {/* ================= ACCOUNT & SECURITY ================= */}

                <SettingsSection
                    icon={<ShieldCheck size={16} />}
                    iconColor="text-emerald-400"
                    iconBg="bg-emerald-500/10"
                    title="Account & Security"
                >
                    <SettingsRow
                        label="Password"
                        description="Last changed 3 months ago."
                        control={
                            <Button variant="secondary" size="sm" className="h-8 px-3 text-xs">
                                Change
                            </Button>
                        }
                    />

                    <SettingsRow
                        label="Two-Factor Authentication"
                        description="Add an extra layer of security to your account."
                        control={<Toggle />}
                    />

                    <SettingsRow
                        label="Connected Devices"
                        description="Manage devices currently signed in to Decisa AI."
                        control={
                            <Button variant="secondary" size="sm" className="h-8 px-3 text-xs">
                                Manage
                            </Button>
                        }
                    />
                </SettingsSection>

                {/* ================= DANGER ZONE ================= */}

                <div
                    className="
                        rounded-2xl
                        border
                        border-red-500/20

                        bg-red-500/[0.03]

                        p-5
                    "
                >
                    <div className="flex items-center gap-2.5">
                        <div
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center

                                rounded-lg

                                bg-red-500/10
                                text-red-400
                            "
                        >
                            <Trash2 size={16} />
                        </div>

                        <h2 className="text-sm font-semibold text-white">
                            Danger Zone
                        </h2>
                    </div>

                    <SettingsRow
                        label="Delete Account"
                        description="Permanently remove your account and all associated data."
                        control={
                            <Button variant="danger" size="sm" className="h-8 px-3 text-xs">
                                Delete
                            </Button>
                        }
                    />
                </div>
            </section>
        </main>
    );
}
