import { useState, useEffect } from "react";

import { CalendarDays, ChevronDown, X } from "lucide-react";

import Button from "../../components/ui/button.tsx";

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

interface NewPlanModalProps {
  onClose: () => void;
  onCreated: (plan: Plan) => void;
  onUpdated:(plan: Plan) => void;
  editingPlan: Plan | null;
}

export default function NewPlanModal({
  onClose,
  onCreated,
  onUpdated,
  editingPlan,
}: NewPlanModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (editingPlan) {
      setTitle(editingPlan.title);
      setDescription(editingPlan.description ?? "");
      setPriority(editingPlan.priority);
      setDueDate(
        editingPlan.dueDate
          ? editingPlan.dueDate.slice(0, 10)
          : "",
      );
    } else {
      setTitle("");
      setDescription("");
      setPriority("MEDIUM");
      setDueDate("");
    }

    setError(null);
  }, [editingPlan]);

  async function handleSubmit() {
    if (!title.trim()) {
      setError("Plan name is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const planId = editingPlan?.id;

      const response = await fetch(
          planId
            ? `http://localhost:3000/api/plans/${planId}`
            : "http://localhost:3000/api/plans", {
        method: planId ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || undefined,
          priority,
          dueDate: dueDate || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || (planId ? "Failed to updatePlan" : "Failed to create plan" ));
      }

      if(planId) {
        onUpdated(result.data);
      } else {
        onCreated?.(result.data);
      }

      onClose();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error 
          ? error.message 
          : editingPlan
            ? "Failed to update plan"
            : "Failed to create plan",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                px-4
                py-6


                backdrop-blur-sm
            "
    >
      {/* ================= MODAL ================= */}

      <div
        className="
                    relative

                    w-full
                    max-w-[520px]

                    max-h-[calc(100vh-48px)]
                    overflow-y-auto

                    rounded-2xl

                    border
                    border-white/10

                    bg-[#0D0D12]/95
                    backdrop-blur-2xl

                "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
                        flex
                        items-start
                        justify-between

                        px-6
                        pt-6
                        pb-5

                        border-b
                        border-white/[0.06]
                    "
        >
          <div className="min-w-0">
            <h2
              className="
                                text-lg
                                font-semibold
                                tracking-[-0.02em]
                                text-white
                            "
            >
              {editingPlan ? "Update Plan": "Create New Plan"}
            </h2>

            <p
              className="
                                mt-1.5

                                text-[13px]
                                leading-5

                                text-slate-400
                            "
            >
              {editingPlan ? "Update your plan details." : "Tunr your intention into a structured plan."}
            </p>
          </div>

          {/* Close */}

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="
                            ml-4
                            h-10
                            w-10
                            shrink-0
                            p-0

                            text-slate-500

                            hover:bg-white/[0.025]
                            hover:text-slate-200
                        "
          >
            <X size={17} />
          </Button>
        </div>

        {/* ================= FORM ================= */}

        <div className="px-6 py-6">
          {/* Plan Name */}

          <div>
            <label
              className="
                                block

                                text-[12px]
                                font-medium

                                text-slate-300
                            "
            >
              Plan name
            </label>

            <input
              type="text"
              placeholder="e.g. Math Competition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                                mt-2

                                h-10
                                w-full

                                rounded-lg

                                border
                                border-white/10

                                bg-white/[0.035]

                                px-3.5

                                text-[13px]
                                text-slate-100

                                placeholder:text-slate-600

                                outline-none

                                transition-all
                                duration-200

                                focus:border-indigo-400/40
                                focus:bg-white/[0.05]
                                focus:ring-2
                                focus:ring-indigo-500/10
                            "
            />
          </div>

          {/* Description */}

          <div className="mt-5">
            <label
              className="
                                block

                                text-[12px]
                                font-medium

                                text-slate-300
                            "
            >
              Description
              <span
                className="
                                    ml-1

                                    font-normal
                                    text-slate-600
                                "
              >
                (optional)
              </span>
            </label>

            <textarea
              rows={4}
              placeholder="What do you want to accomplish?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
                                mt-2

                                w-full

                                resize-none

                                rounded-lg

                                border
                                border-white/10

                                bg-white/[0.035]

                                px-3.5
                                py-3

                                text-[13px]
                                leading-5

                                text-slate-100

                                placeholder:text-slate-600

                                outline-none

                                transition-all
                                duration-200

                                focus:border-indigo-400/40
                                focus:bg-white/[0.05]
                                focus:ring-2
                                focus:ring-indigo-500/10
                            "
            />
          </div>

          {/* Priority + Deadline */}

          <div
            className="
                            mt-5

                            grid
                            grid-cols-1
                            sm:grid-cols-2

                            gap-4
                        "
          >
            {/* Priority */}

            <div>
              <label
                className="
                                    block

                                    text-[12px]
                                    font-medium

                                    text-slate-300
                                "
              >
                Priority
              </label>

              <div className="relative mt-2">
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="
                                        h-10
                                        w-full

                                        appearance-none

                                        rounded-lg

                                        border
                                        border-white/10

                                        bg-white/[0.035]

                                        pl-3.5
                                        pr-9

                                        text-[13px]
                                        text-slate-200

                                        outline-none

                                        transition-all
                                        duration-200

                                        focus:border-indigo-400/40
                                        focus:bg-white/[0.05]
                                        focus:ring-2
                                        focus:ring-indigo-500/10
                                    "
                >
                  <option value="LOW" className="bg-[#0D0D12]">
                    Low
                  </option>

                  <option value="MEDIUM" className="bg-[#0D0D12]">
                    Medium
                  </option>

                  <option value="HIGH" className="bg-[#0D0D12]">
                    High
                  </option>
                </select>

                <ChevronDown
                  size={14}
                  className="
                                        pointer-events-none

                                        absolute
                                        right-3
                                        top-1/2

                                        -translate-y-1/2

                                        text-slate-500
                                    "
                />
              </div>
            </div>

            {/* Deadline */}

            <div>
              <label
                className="
                                    block

                                    text-[12px]
                                    font-medium

                                    text-slate-300
                                "
              >
                Deadline
              </label>

              <div className="relative mt-2">
                <CalendarDays
                  size={14}
                  className="
                                        pointer-events-none

                                        absolute
                                        left-3
                                        top-1/2

                                        -translate-y-1/2

                                        text-slate-300
                                    "
                />

                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="
                                        date-input

                                        h-10
                                        w-full

                                        rounded-lg

                                        border
                                        border-white/10

                                        bg-white/[0.035]

                                        pl-9
                                        pr-3

                                        text-[13px]
                                        text-slate-300

                                        outline-none

                                        transition-all
                                        duration-200

                                        focus:border-indigo-400/40
                                        focus:bg-white/[0.05]
                                        focus:ring-2
                                        focus:ring-indigo-500/10
                                    "
                />
              </div>
            </div>
          </div>
        </div>

        {error && <p className="px-6 pb-4 text-sm text-red-400">{error}</p>}

        {/* ================= FOOTER ================= */}

        <div
          className="
                        flex
                        flex-col-reverse
                        sm:flex-row

                        sm:items-center
                        sm:justify-end

                        gap-2

                        px-6
                        py-4

                        border-t
                        border-white/[0.06]

                        bg-white/[0.015]
                    "
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="
                            w-full
                            sm:w-auto

                            text-slate-400

                            hover:text-slate-200
                        "
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleSubmit}
            disabled={loading}
            className="
                            w-full
                            sm:w-auto

                            px-4
                        "
          >
            {loading
              ? editingPlan
                ? "Updating..."
                : "Creating..."
              : editingPlan
                ? "Update Plan"
                : "Create Plan"}
          </Button>
        </div>
      </div>
    </div>
  );
}
