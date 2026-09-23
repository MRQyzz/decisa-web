import { useState, useEffect } from "react";
import { CalendarDays, ChevronDown, X } from "lucide-react";
import Button from "../../components/ui/button";

type Goal = {
    id: string;
    title: string;
    description: string | null;
    priority: "LOW" | "MEDIUM" | "HIGH";
    targetDate: string | null;
    createdAt: string; 
    updatedAt: string;
};

interface newGoalModalProps {
    onClose: () => void;
    onCreated: (goal: Goal) => void;
    onUpdated: (goal: Goal) => void;
    editingGoal: Goal | null;
}

export default function newGoalModal({
    onClose,
    onCreated,
    onUpdated,
    editingGoal,
}: newGoalModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");
    const [targetDate, setTargetDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (editingGoal) {
            setTitle(editingGoal.title);
            setDescription(editingGoal.description ?? "");
            setPriority(editingGoal.priority);
            setTargetDate(
                editingGoal.targetDate
                    ? editingGoal.targetDate.slice(0, 10)
                    : "",
            );
        } else {
            setTitle("");
            setDescription("")
            setPriority("MEDIUM");
            setTargetDate("")
        }

        setError(null)
    }, [editingGoal])

    async function handleSubmit() {
        if(!title.trim()) {
            setError("Goal name is required");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const goalId = editingGoal?.id;

            const response = await fetch(
                goalId
                    ? `http://localhost:3000/api/goals/${goalId}`
                    : "http://localhost:3000/api/goals",
                {
                    method: goalId? "PATCH" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title.trim(),
                        description: description.trim() || undefined,
                        priority,
                        targetDate: targetDate || undefined,
                    }),
                }
            );

            const result = await response.json();

            console.log(
                goalId
                    ? "UPDATE GOAL RESPONSE:"
                    : "CREATE GOAL RESPONSE:",
                result,
            );

            if(!response.ok) {
                throw new Error(
                    result.message || 
                        (goalId
                            ? "Failed to update goal"
                            : "Failed to create goal"),
                );
            }

            if(goalId) {
                onUpdated(result.data);     
            } else {
                onCreated(result.data);
            }

            onClose()

        } catch (error) {
            console.error(error);

            setError(
                error instanceof Error
                    ? error.message
                    : editingGoal
                        ? "Failed to update goal"
                        : "Failed to create goal",
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111116] shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                    <div>
                        <h2 className="text-base font-semibold text-white">
                            {editingGoal ? "Update Goal" : "Create New Goal"}
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            {editingGoal
                                ? "Update the details of your goal."
                                : "Define something you want to achieve."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                    >
                        <X size={17} />
                    </button>
                </div>

                {/* Form */}
                <div className="space-y-4 p-5">
                    
                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-xs font-medium text-slate-300">
                            Goal name
                        </label>

                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Become an AI Engineer"
                            className="w-full rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-xs font-medium text-slate-300">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            placeholder="Describe what you want to achieve..."
                            rows={4}
                            className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        
                        {/* Priority */}
                        <div>
                            <label className="mb-2 block text-xs font-medium text-slate-300">
                                Priority
                            </label>

                            <div className="relative">
                                <select
                                    value={priority}
                                    onChange={(e) =>
                                        setPriority(e.target.value)
                                    }
                                    className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5 text-sm text-white outline-none focus:border-indigo-500/50"
                                >
                                    <option value="LOW">LOW</option>
                                    <option value="MEDIUM">MEDIUM</option>
                                    <option value="HIGH">HIGH</option>
                                </select>

                                <ChevronDown
                                    size={15}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                                />
                            </div>
                        </div>

                        {/* Target date */}
                        <div>
                            <label className="mb-2 block text-xs font-medium text-slate-300">
                                Target date
                            </label>

                            <div className="relative">
                                <CalendarDays
                                    size={15}
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                                />

                                <input
                                    type="date"
                                    value={targetDate}
                                    onChange={(e) =>
                                        setTargetDate(e.target.value)
                                    }
                                    className="w-full rounded-lg border border-white/10 bg-white/[0.035] py-2.5 pl-9 pr-3 text-sm text-white outline-none focus:border-indigo-500/50"
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <p className="text-xs text-red-400">
                            {error}
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 border-t border-white/5 px-5 py-4">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={onClose}
                        disabled={loading}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading
                            ? editingGoal
                                ? "Updating..."
                                : "Creating..."
                            : editingGoal
                                ? "Update Goal"
                                : "Create Goal"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

