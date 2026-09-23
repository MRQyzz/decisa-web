import { useEffect, useState } from "react";

import {
  CalendarDays,
  Plus,
  Search,
  Trash2,
  Pencil,
  X,
} from "lucide-react";

import { apiFetch } from "../../lib/api";

type Plan = {
  id: string;
  title: string;
  description: string | null;
  status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
  priority: "LOW" | "MEDIUM" | "HIGH";
  progress: string;
  startDate: string | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
};

type PlanResponse = {
  success: boolean;
  data: Plan;
};

type PlansResponse = {
  success: boolean;
  data: Plan[];
};

type PlanForm = {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  startDate: string;
  dueDate: string;
};

const emptyForm: PlanForm = {
  title: "",
  description: "",
  priority: "MEDIUM",
  startDate: "",
  dueDate: "",
};

export default function Plans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [form, setForm] = useState<PlanForm>(emptyForm);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");

  async function loadPlans() {
    try {
      setLoading(true);
      setError(null);

      const result = await apiFetch<PlansResponse>("/api/plans");

      setPlans(result.data);
    } catch (error) {
      console.error("Load plans error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load plans",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPlans();
  }, []);

  function openCreateModal() {
    setEditingPlan(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEditModal(plan: Plan) {
    setEditingPlan(plan);

    setForm({
      title: plan.title,
      description: plan.description ?? "",
      priority: plan.priority,
      startDate: plan.startDate
        ? plan.startDate.slice(0, 10)
        : "",
      dueDate: plan.dueDate
        ? plan.dueDate.slice(0, 10)
        : "",
    });

    setShowModal(true);
  }

  function closeModal() {
    if (saving) return;

    setShowModal(false);
    setEditingPlan(null);
    setForm(emptyForm);
  }

  async function handleSave() {
    if (!form.title.trim()) {
      return;
    }

    try {
      setSaving(true);

      const body = {
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        priority: form.priority,
        startDate: form.startDate || undefined,
        dueDate: form.dueDate || undefined,
      };

      if (editingPlan) {
        const result = await apiFetch<PlanResponse>(
          `/api/plans/${editingPlan.id}`,
          {
            method: "PATCH",
            body: JSON.stringify(body),
          },
        );

        setPlans((current) =>
          current.map((plan) =>
            plan.id === editingPlan.id
              ? result.data
              : plan,
          ),
        );
      } else {
        const result = await apiFetch<PlanResponse>(
          "/api/plans",
          {
            method: "POST",
            body: JSON.stringify(body),
          },
        );

        setPlans((current) => [
          result.data,
          ...current,
        ]);
      }

      closeModal();
    } catch (error) {
      console.error("Save plan error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to save plan",
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(plan: Plan) {
    const confirmed = window.confirm(
      `Delete "${plan.title}"?`,
    );

    if (!confirmed) return;

    try {
      await apiFetch(`/api/plans/${plan.id}`, {
        method: "DELETE",
      });

      setPlans((current) =>
        current.filter((item) => item.id !== plan.id),
      );
    } catch (error) {
      console.error("Delete plan error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete plan",
      );
    }
  }

  const filteredPlans = plans.filter((plan) =>
    plan.title
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <section className="mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Plans
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Manage your plans and stay focused on what matters.
            </p>
          </div>

          <button
            onClick={openCreateModal}
            className="flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            <Plus size={16} />
            New Plan
          </button>
        </div>
      </section>

      {/* Search */}
      <section className="mb-6">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            type="text"
            placeholder="Search plans..."
            className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-9 pr-3 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-indigo-400/40"
          />
        </div>
      </section>

      {/* Content */}
      {loading ? (
        <p className="text-sm text-slate-400">
          Loading plans...
        </p>
      ) : error ? (
        <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
          <p className="text-sm text-red-400">
            Failed to load plans
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {error}
          </p>

          <button
            onClick={loadPlans}
            className="mt-3 text-xs text-indigo-400 hover:text-indigo-300"
          >
            Try again
          </button>
        </div>
      ) : filteredPlans.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center">
          <p className="text-sm text-slate-400">
            {search
              ? "No plans match your search."
              : "No plans yet."}
          </p>

          {!search && (
            <button
              onClick={openCreateModal}
              className="mt-4 text-sm text-indigo-400 hover:text-indigo-300"
            >
              Create your first plan
            </button>
          )}
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-indigo-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                    ✦
                  </div>

                  <h2 className="truncate text-base font-semibold text-white">
                    {plan.title}
                  </h2>

                  <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-400">
                    {plan.description ?? "No description"}
                  </p>
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={() => openEditModal(plan)}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-200"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(plan)}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-red-400/10 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Progress
                  </span>

                  <span className="text-xs font-medium text-slate-300">
                    {Number(plan.progress)}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    style={{
                      width: `${Number(plan.progress)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="rounded-md bg-indigo-400/10 px-2 py-1 text-[11px] font-medium text-indigo-300">
                  {plan.priority}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CalendarDays size={13} />

                  {plan.dueDate
                    ? new Date(
                        plan.dueDate,
                      ).toLocaleDateString()
                    : "No due date"}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111113] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {editingPlan
                  ? "Edit Plan"
                  : "New Plan"}
              </h2>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                value={form.title}
                onChange={(event) =>
                  setForm({
                    ...form,
                    title: event.target.value,
                  })
                }
                placeholder="Plan title"
                className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white outline-none placeholder:text-slate-600"
              />

              <textarea
                value={form.description}
                onChange={(event) =>
                  setForm({
                    ...form,
                    description:
                      event.target.value,
                  })
                }
                placeholder="Description"
                rows={4}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none placeholder:text-slate-600"
              />

              <select
                value={form.priority}
                onChange={(event) =>
                  setForm({
                    ...form,
                    priority:
                      event.target.value as PlanForm["priority"],
                  })
                }
                className="h-10 w-full rounded-lg border border-white/10 bg-[#111113] px-3 text-sm text-white outline-none"
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

              <div className="w-full">
                <input
                  type="date"
                  value={form.dueDate}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      dueDate:
                        event.target.value,
                    })
                  }
                  className="w-full h-10 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white"
                />
              </div>

              <button
                onClick={handleSave}
                disabled={
                  saving || !form.title.trim()
                }
                className="h-10 w-full rounded-lg bg-indigo-500 text-sm font-medium text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : editingPlan
                    ? "Save Changes"
                    : "Create Plan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}