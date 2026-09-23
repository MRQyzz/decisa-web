import { useEffect, useState } from "react";

import {
  Plus,
  Pencil,
  Trash2,
  Search,
  X,
} from "lucide-react";

import { apiFetch } from "../../lib/api";

type Task = {
  id: string;
  title: string;
  description: string | null;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "TODO" | "IN_PROGRESS" | "DONE";
  estimatedMinutes: number | null;
  dueDate: string | null;
  planId: string | null;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

type TasksResponse = {
  success: boolean;
  data: Task[];
};

type TaskResponse = {
  success: boolean;
  data: Task;
};

type TaskForm = {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "TODO" | "IN_PROGRESS" | "DONE";
  estimatedMinutes: string;
  dueDate: string;
};

const emptyForm: TaskForm = {
  title: "",
  description: "",
  priority: "MEDIUM",
  status: "TODO",
  estimatedMinutes: "",
  dueDate: "",
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editingTask, setEditingTask] =
    useState<Task | null>(null);

  const [form, setForm] =
    useState<TaskForm>(emptyForm);

  const [saving, setSaving] = useState(false);

  async function loadTasks() {
    try {
      setLoading(true);
      setError(null);

      const result =
        await apiFetch<TasksResponse>(
          "/api/tasks",
        );

      setTasks(result.data);
    } catch (error) {
      console.error("Load tasks error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load tasks",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function openCreateModal() {
    setEditingTask(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEditModal(task: Task) {
    setEditingTask(task);

    setForm({
      title: task.title,
      description: task.description ?? "",
      priority: task.priority,
      status: task.status,
      estimatedMinutes:
        task.estimatedMinutes?.toString() ?? "",
      dueDate: task.dueDate
        ? task.dueDate.slice(0, 10)
        : "",
    });

    setShowModal(true);
  }

  function closeModal() {
    if (saving) return;

    setShowModal(false);
    setEditingTask(null);
    setForm(emptyForm);
  }

  async function handleSave() {
    if (!form.title.trim()) return;

    try {
      setSaving(true);

      if (editingTask) {
        const result =
          await apiFetch<TaskResponse>(
            `/api/tasks/${editingTask.id}`,
            {
              method: "PATCH",
              body: JSON.stringify({
                title: form.title.trim(),
                description:
                  form.description.trim() ||
                  undefined,
                priority: form.priority,
                status: form.status,
                estimatedMinutes:
                  form.estimatedMinutes
                    ? Number(
                        form.estimatedMinutes,
                      )
                    : undefined,
                dueDate:
                  form.dueDate || undefined,
              }),
            },
          );

        setTasks((current) =>
          current.map((task) =>
            task.id === editingTask.id
              ? result.data
              : task,
          ),
        );
      } else {
        const result =
          await apiFetch<TaskResponse>(
            "/api/tasks",
            {
              method: "POST",
              body: JSON.stringify({
                title: form.title.trim(),
                description:
                  form.description.trim() ||
                  undefined,
                priority: form.priority,
                estimatedMinutes:
                  form.estimatedMinutes
                    ? Number(
                        form.estimatedMinutes,
                      )
                    : undefined,
                dueDate:
                  form.dueDate || undefined,
              }),
            },
          );

        setTasks((current) => [
          result.data,
          ...current,
        ]);
      }

      closeModal();
    } catch (error) {
      console.error("Save task error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to save task",
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(task: Task) {
    if (
      !window.confirm(
        `Delete "${task.title}"?`,
      )
    ) {
      return;
    }

    try {
      await apiFetch(
        `/api/tasks/${task.id}`,
        {
          method: "DELETE",
        },
      );

      setTasks((current) =>
        current.filter(
          (item) => item.id !== task.id,
        ),
      );
    } catch (error) {
      console.error(
        "Delete task error:",
        error,
      );

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete task",
      );
    }
  }

  async function changeStatus(
    task: Task,
    status: Task["status"],
  ) {
    try {
      const result =
        await apiFetch<TaskResponse>(
          `/api/tasks/${task.id}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              status,
            }),
          },
        );

      setTasks((current) =>
        current.map((item) =>
          item.id === task.id
            ? result.data
            : item,
        ),
      );
    } catch (error) {
      console.error(
        "Update task status error:",
        error,
      );
    }
  }

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <section className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Tasks
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Manage your tasks and track progress.
            </p>
          </div>

          <button
            onClick={openCreateModal}
            className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
          >
            <Plus size={16} />
            New Task
          </button>
        </div>
      </section>

      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search tasks..."
          className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-9 text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>

      {loading ? (
        <p className="text-sm text-slate-400">
          Loading tasks...
        </p>
      ) : error ? (
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
          <p className="text-sm text-red-400">
            Failed to load tasks
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {error}
          </p>

          <button
            onClick={loadTasks}
            className="mt-3 text-xs text-indigo-400"
          >
            Try again
          </button>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center">
          <p className="text-sm text-slate-400">
            {search
              ? "No tasks match your search."
              : "No tasks yet."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={
                    task.status === "DONE"
                  }
                  onChange={(e) =>
                    changeStatus(
                      task,
                      e.target.checked
                        ? "DONE"
                        : "TODO",
                    )
                  }
                  className="mt-1"
                />

                <div className="min-w-0 flex-1">
                  <h2
                    className={`font-medium ${
                      task.status === "DONE"
                        ? "text-slate-500 line-through"
                        : "text-white"
                    }`}
                  >
                    {task.title}
                  </h2>

                  {task.description && (
                    <p className="mt-1 text-sm text-slate-500">
                      {task.description}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-indigo-400/10 px-2 py-1 text-[11px] text-indigo-300">
                      {task.priority}
                    </span>

                    <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-slate-400">
                      {task.status}
                    </span>

                    {task.dueDate && (
                      <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-slate-400">
                        Due{" "}
                        {new Date(
                          task.dueDate,
                        ).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={() =>
                      openEditModal(task)
                    }
                    className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(task)
                    }
                    className="rounded-lg p-2 text-slate-500 hover:bg-red-400/10 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111113] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {editingTask
                  ? "Edit Task"
                  : "New Task"}
              </h2>

              <button
                onClick={closeModal}
                className="text-slate-500 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                placeholder="Task title"
                className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white"
              />

              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description:
                      e.target.value,
                  })
                }
                placeholder="Description"
                rows={3}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-white"
              />

              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({
                    ...form,
                    priority:
                      e.target.value as TaskForm["priority"],
                  })
                }
                className="h-10 w-full rounded-lg border border-white/10 bg-[#111113] px-3 text-sm text-white"
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

              {editingTask && (
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status:
                        e.target.value as TaskForm["status"],
                    })
                  }
                  className="h-10 w-full rounded-lg border border-white/10 bg-[#111113] px-3 text-sm text-white"
                >
                  <option value="TODO">
                    Todo
                  </option>
                  <option value="IN_PROGRESS">
                    In Progress
                  </option>
                  <option value="DONE">
                    Done
                  </option>
                </select>
              )}

              <input
                type="number"
                min="1"
                value={form.estimatedMinutes}
                onChange={(e) =>
                  setForm({
                    ...form,
                    estimatedMinutes:
                      e.target.value,
                  })
                }
                placeholder="Estimated minutes"
                className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white"
              />

              <input
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    dueDate: e.target.value,
                  })
                }
                className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white"
              />

              <button
                onClick={handleSave}
                disabled={
                  saving || !form.title.trim()
                }
                className="h-10 w-full rounded-lg bg-indigo-500 text-sm font-medium text-white disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingTask
                    ? "Save Changes"
                    : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}