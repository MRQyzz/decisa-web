import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Task {
    id: string;
    title: string;
    description: string | null;
    status: "TODO" | "IN_PROGRESS" | "DONE";
    priority: "LOW" | "MEDIUM" | "HIGH";
    dueDate: string | null;
    estimatedMinutes: number | null;
    planId: string | null;
    createdAt: string;
    updatedAt: string;
}

interface TaskModalProps {
    task: Task | null;
    onClose: () => void;
    onSuccess: (task: Task) => void;
}

export default function TaskModal({
    task,
    onClose,
    onSuccess,
}: TaskModalProps) {
    const isEditing = task !== null;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<
        "LOW" | "MEDIUM" | "HIGH"
    >("MEDIUM");
    const [estimatedMinutes, setEstimatedMinutes] = useState("");
    const [dueDate, setDueDate] = useState("");

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description ?? "");
            setPriority(task.priority);

            setEstimatedMinutes(
                task.estimatedMinutes?.toString() ?? "",
            );

            setDueDate(
                task.dueDate
                    ? task.dueDate.slice(0, 10)
                    : "",
            );
        } else {
            setTitle("");
            setDescription("");
            setPriority("MEDIUM");
            setEstimatedMinutes("");
            setDueDate("");
        }
    }, [task]);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        if (!title.trim()) {
            setError("Task title is required.");
            return;
        }

        try {
            setSaving(true);
            setError(null);

            const response = await fetch(
                isEditing
                    ? `http://localhost:3000/api/tasks/${task.id}`
                    : "http://localhost:3000/api/tasks",
                {
                    method: isEditing ? "PATCH" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title.trim(),
                        description:
                            description.trim() || undefined,
                        priority,
                        estimatedMinutes:
                            estimatedMinutes
                                ? Number(estimatedMinutes)
                                : undefined,
                        dueDate: dueDate
                            ? new Date(
                                  `${dueDate}T00:00:00`,
                              ).toISOString()
                            : undefined,
                    }),
                },
            );

            const result = await response.json();

            console.log(
                "CREATE TASK RESPONSE:",
                result,
            );

            if (!response.ok) {
                throw new Error(
                    result.message ||
                        "Failed to create task",
                );
            }

            onSuccess(result.data);
        } catch (error) {
            console.error(
                "Create task error:",
                error,
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Failed to create task",
            );
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111113] shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                    <div>
                        <h2 className="text-base font-semibold text-slate-100">
                            {isEditing ? "Edit Task" : "New Task"}
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            {isEditing
                                ? "Update your task details."
                                : "Create a new task."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 hover:text-slate-300"
                    >
                        <X size={17} />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 p-6"
                >
                    {/* Title */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-300">
                            Title
                        </label>

                        <input
                            value={title}
                            onChange={(event) =>
                                setTitle(event.target.value)
                            }
                            placeholder="e.g. Study calculus fundamentals"
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-300">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(event) =>
                                setDescription(
                                    event.target.value,
                                )
                            }
                            rows={3}
                            placeholder="Describe what needs to be done..."
                            className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-300">
                            Priority
                        </label>

                        <select
                            value={priority}
                            onChange={(event) =>
                                setPriority(
                                    event.target.value as
                                        | "LOW"
                                        | "MEDIUM"
                                        | "HIGH",
                                )
                            }
                            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-indigo-500/50"
                        >
                            <option value="LOW">
                                Low
                            </option>

                            <option value="MEDIUM">
                                Medium
                            </option>

                            <option value="HIGH">
                                High
                            </option>
                        </select>
                    </div>

                    {/* Estimated time + Due date */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-slate-300">
                                Estimated Minutes
                            </label>

                            <input
                                type="number"
                                min="1"
                                value={estimatedMinutes}
                                onChange={(event) =>
                                    setEstimatedMinutes(
                                        event.target.value,
                                    )
                                }
                                placeholder="60"
                                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-slate-300">
                                Due Date
                            </label>

                            <input
                                type="date"
                                value={dueDate}
                                onChange={(event) =>
                                    setDueDate(
                                        event.target.value,
                                    )
                                }
                                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-indigo-500/50"
                            />
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-xs text-red-400">
                            {error}
                        </p>
                    )}

                    {/* Actions */}
                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-slate-200"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={saving}
                            className="rounded-lg bg-indigo-500 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {saving
                                ? "Saving..."
                                : isEditing
                                    ? "Save Changes"
                                    : "Create Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}