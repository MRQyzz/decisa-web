import { useEffect, useState } from "react";

import {
  Plus,
  Pencil,
  Trash2,
  Search,
  X,
  Sparkles,
} from "lucide-react";

import { apiFetch } from "../../lib/api";

import AnalyzeGoalModal, {
  type GoalAnalysis,
  type SuggestedTask,
} from "./analyzeGoalsModal";

type Goal = {
  id: string;
  title: string;
  description: string | null;
  priority: "LOW" | "MEDIUM" | "HIGH";
  targetDate: string | null;
  createdAt: string;
  updatedAt: string;
};

type GoalsResponse = {
  success: boolean;
  data: Goal[];
};

type GoalResponse = {
  success: boolean;
  data: Goal;
};

type AnalyzeResponse = {
  success: boolean;
  data: {
    analysis: GoalAnalysis;
    suggestedTasks: SuggestedTask[];
  };
};

type CreateTaskResponse = {
  success: boolean;
  data: {
    id: string;
  };
};

type GoalForm = {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  targetDate: string;
};

const emptyForm: GoalForm = {
  title: "",
  description: "",
  priority: "MEDIUM",
  targetDate: "",
};

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingGoal, setEditingGoal] =
    useState<Goal | null>(null);

  const [form, setForm] =
    useState<GoalForm>(emptyForm);

  const [saving, setSaving] = useState(false);

  // =========================
  // Goal Analysis State
  // =========================

  const [analysis, setAnalysis] =
    useState<AnalyzeResponse["data"] | null>(null);

  const [analyzingGoal, setAnalyzingGoal] =
    useState<Goal | null>(null);

  const [analyzingId, setAnalyzingId] =
    useState<string | null>(null);

  // =========================
  // Load Goals
  // =========================

  async function loadGoals() {
    try {
      setLoading(true);
      setError(null);

      const result =
        await apiFetch<GoalsResponse>(
          "/api/goals",
        );

      setGoals(result.data);
    } catch (error) {
      console.error(
        "Load goals error:",
        error,
      );

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load goals",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGoals();
  }, []);

  // =========================
  // Create / Edit Goal
  // =========================

  function openCreateModal() {
    setEditingGoal(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEditModal(goal: Goal) {
    setEditingGoal(goal);

    setForm({
      title: goal.title,
      description: goal.description ?? "",
      priority: goal.priority,
      targetDate: goal.targetDate
        ? goal.targetDate.slice(0, 10)
        : "",
    });

    setShowModal(true);
  }

  function closeModal() {
    if (saving) return;

    setShowModal(false);
    setEditingGoal(null);
    setForm(emptyForm);
  }

  async function handleSave() {
    if (!form.title.trim()) return;

    try {
      setSaving(true);

      const body = {
        title: form.title.trim(),
        description:
          form.description.trim() ||
          undefined,
        priority: form.priority,
        targetDate:
          form.targetDate || undefined,
      };

      if (editingGoal) {
        const result =
          await apiFetch<GoalResponse>(
            `/api/goals/${editingGoal.id}`,
            {
              method: "PATCH",
              body: JSON.stringify(body),
            },
          );

        setGoals((current) =>
          current.map((goal) =>
            goal.id === editingGoal.id
              ? result.data
              : goal,
          ),
        );
      } else {
        const result =
          await apiFetch<GoalResponse>(
            "/api/goals",
            {
              method: "POST",
              body: JSON.stringify(body),
            },
          );

        setGoals((current) => [
          result.data,
          ...current,
        ]);
      }

      closeModal();
    } catch (error) {
      console.error(
        "Save goal error:",
        error,
      );

      alert(
        error instanceof Error
          ? error.message
          : "Failed to save goal",
      );
    } finally {
      setSaving(false);
    }
  }

  // =========================
  // Delete Goal
  // =========================

  async function handleDelete(goal: Goal) {
    if (
      !window.confirm(
        `Delete "${goal.title}"?`,
      )
    ) {
      return;
    }

    try {
      await apiFetch(
        `/api/goals/${goal.id}`,
        {
          method: "DELETE",
        },
      );

      setGoals((current) =>
        current.filter(
          (item) => item.id !== goal.id,
        ),
      );
    } catch (error) {
      console.error(
        "Delete goal error:",
        error,
      );

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete goal",
      );
    }
  }

  // =========================
  // Analyze Goal
  // =========================

  async function handleAnalyze(goal: Goal) {
    try {
      setAnalyzingId(goal.id);

      const result =
        await apiFetch<AnalyzeResponse>(
          `/api/goals/${goal.id}/analyze`,
          {
            method: "POST",
          },
        );

      setAnalyzingGoal(goal);
      setAnalysis(result.data);
    } catch (error) {
      console.error(
        "Analyze goal error:",
        error,
      );

      alert(
        error instanceof Error
          ? error.message
          : "Failed to analyze goal",
      );
    } finally {
      setAnalyzingId(null);
    }
  }

  // =========================
  // Add Suggested Task
  // =========================

  async function handleAcceptTask(
    task: SuggestedTask,
  ) {
    try {
      await apiFetch<CreateTaskResponse>(
        "/api/tasks",
        {
          method: "POST",
          body: JSON.stringify({
            title: task.title,
            description: task.description,
            priority: task.priority,
            estimatedMinutes:
              task.estimatedMinutes,
          }),
        },
      );
    } catch (error) {
      console.error(
        "Create suggested task error:",
        error,
      );

      throw error;
    }
  }

  // =========================
  // Close Analysis
  // =========================

  function closeAnalysis() {
    setAnalysis(null);
    setAnalyzingGoal(null);
  }

  const filteredGoals = goals.filter((goal) =>
    goal.title
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <section className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Goals
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Define goals and let Decisa help you analyze them.
            </p>
          </div>

          <button
            onClick={openCreateModal}
            className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
          >
            <Plus size={16} />
            New Goal
          </button>
        </div>
      </section>

      {/* Search */}
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
          placeholder="Search goals..."
          className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-9 text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-sm text-slate-400">
          Loading goals...
        </p>
      ) : error ? (
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
          <p className="text-sm text-red-400">
            Failed to load goals
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {error}
          </p>

          <button
            onClick={loadGoals}
            className="mt-3 text-xs text-indigo-400"
          >
            Try again
          </button>
        </div>
      ) : filteredGoals.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center">
          <p className="text-sm text-slate-400">
            {search
              ? "No goals match your search."
              : "No goals yet."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredGoals.map((goal) => (
            <div
              key={goal.id}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-white">
                    {goal.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {goal.description ??
                      "No description"}
                  </p>
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={() =>
                      openEditModal(goal)
                    }
                    className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(goal)
                    }
                    className="rounded-lg p-2 text-slate-500 hover:bg-red-400/10 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md bg-indigo-400/10 px-2 py-1 text-[11px] text-indigo-300">
                  {goal.priority}
                </span>

                {goal.targetDate && (
                  <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-slate-400">
                    Target{" "}
                    {new Date(
                      goal.targetDate,
                    ).toLocaleDateString()}
                  </span>
                )}
              </div>

              <button
                onClick={() =>
                  handleAnalyze(goal)
                }
                disabled={
                  analyzingId === goal.id
                }
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-400/5 px-3 py-2 text-sm text-indigo-300 transition hover:bg-indigo-400/10 disabled:opacity-50"
              >
                <Sparkles size={15} />

                {analyzingId === goal.id
                  ? "Analyzing..."
                  : "Analyze Goal"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Create / Edit Goal Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111113] p-6">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {editingGoal
                  ? "Edit Goal"
                  : "New Goal"}
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
                placeholder="Goal title"
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
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-white"
              />

              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({
                    ...form,
                    priority:
                      e.target.value as GoalForm["priority"],
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

              <input
                type="date"
                value={form.targetDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    targetDate:
                      e.target.value,
                  })
                }
                className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white"
              />

              <button
                onClick={handleSave}
                disabled={
                  saving ||
                  !form.title.trim()
                }
                className="h-10 w-full rounded-lg bg-indigo-500 text-sm font-medium text-white disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingGoal
                    ? "Save Changes"
                    : "Create Goal"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Goal Analysis Modal */}
      {analysis && analyzingGoal && (
        <AnalyzeGoalModal
          goalTitle={analyzingGoal.title}
          analysis={analysis.analysis}
          suggestedTasks={analysis.suggestedTasks}
          onClose={closeAnalysis}
          onAcceptTask={handleAcceptTask}
        />
      )}
    </main>
  );
}