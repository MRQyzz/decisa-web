import { X, Target, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/button";
import { useEffect, useState } from "react";

export type SuggestedTask = {
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  estimatedMinutes: number;
};

export type GoalAnalysis = {
  summary: string;
  difficulty: "LOW" | "MEDIUM" | "HIGH";
  estimatedWeeks: number;
  clarityScore: number;
  keyAreas: string[];
};

interface AnalyzeGoalModalProps {
  goalTitle: string;
  analysis: GoalAnalysis;
  suggestedTasks: SuggestedTask[];
  onClose: () => void;
  onAcceptTask: (task: SuggestedTask) => Promise<void>;
}

export default function AnalyzeGoalModal({
  goalTitle,
  analysis,
  suggestedTasks,
  onClose,
  onAcceptTask,
}: AnalyzeGoalModalProps) {
  const [tasks, setTasks] = useState<SuggestedTask[]>(suggestedTasks);
  const [acceptingTask, setAcceptingTask] = useState<string | null>(null);

  useEffect(() => {
    setTasks(suggestedTasks);
  }, [suggestedTasks]);

  function handleRejectTask(title: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.title !== title),
    );
  }

  async function handleAcceptTask(task: SuggestedTask) {
    try {
      setAcceptingTask(task.title);

      await onAcceptTask(task);

      setTasks((currentTasks) =>
        currentTasks.filter(
          (currentTask) => currentTask.title !== task.title,
        ),
      );
    } catch (error) {
      console.error("Accept suggested task error:", error);
    } finally {
      setAcceptingTask(null);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111116] shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Sparkles size={18} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-white">
                AI Goal Analysis
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {goalTitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">

          {/* Summary */}
          <section>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
              AI Summary
            </p>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-sm leading-6 text-slate-300">
                {analysis.summary}
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-xs text-slate-500">
                Difficulty
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                {analysis.difficulty}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-xs text-slate-500">
                Estimated Duration
              </p>

              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-white">
                <Clock size={14} />
                {analysis.estimatedWeeks} weeks
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-xs text-slate-500">
                Goal Clarity
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                {analysis.clarityScore}/10
              </p>
            </div>
          </section>

          {/* Key Areas */}
          <section className="mt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
              Key Areas
            </p>

            <div className="flex flex-wrap gap-2">
              {analysis.keyAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          {/* Suggested Tasks */}
          <section className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Suggested Tasks
              </p>

              <span className="text-xs text-slate-500">
                {tasks.length} suggestions
              </span>
            </div>

            {tasks.length === 0 ? (
              <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5 text-center">
                <p className="text-sm text-slate-400">
                  No suggested tasks remaining.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Target size={15} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-medium text-white">
                          {task.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {task.description}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-white/[0.05] px-2 py-1 text-[11px] text-slate-400">
                            {task.priority}
                          </span>

                          <span className="text-[11px] text-slate-500">
                            {task.estimatedMinutes} min
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2 border-t border-white/5 pt-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRejectTask(task.title)}
                        disabled={acceptingTask !== null}
                        className="h-8 px-3 text-xs"
                      >
                        Reject
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<CheckCircle2 size={14} />}
                        onClick={() => handleAcceptTask(task)}
                        disabled={acceptingTask !== null}
                        className="h-8 px-3 text-xs"
                      >
                        {acceptingTask === task.title
                          ? "Adding..."
                          : "Add to Tasks"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-white/10 px-5 py-4 sm:px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}