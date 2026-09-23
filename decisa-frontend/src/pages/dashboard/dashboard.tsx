import {
  ArrowRight,
  CheckSquare,
  Goal,
  ListTodo,
  Plus,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* HERO */}
        <section className="relative mb-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-indigo-500/[0.10]
              blur-3xl
            "
          />

          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-indigo-500/10
                    text-indigo-400
                  "
                >
                  <Sparkles size={16} />
                </div>

                <span className="text-xs font-medium text-indigo-400">
                  Decisa AI
                </span>
              </div>

              <h1
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                Good afternoon, Qy.
              </h1>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Turn your goals into clear plans,
                actionable tasks, and better decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/plans")}
                  className="
                    inline-flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    bg-indigo-500
                    px-4
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-indigo-400
                  "
                >
                  <Plus size={15} />
                  Create New Plan
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/goals")}
                  className="
                    inline-flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    text-sm
                    font-medium
                    text-slate-300
                    transition
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  Explore Goals
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TITLE */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-white">
            Your Workspace
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Everything you need to turn decisions into action.
          </p>
        </div>

        {/* MAIN FEATURES */}
        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<ListTodo size={18} />}
            title="Plans"
            description="Organize the things you're working toward into clear, manageable plans."
            action="Manage Plans"
            onClick={() => navigate("/plans")}
          />

          <FeatureCard
            icon={<CheckSquare size={18} />}
            title="Tasks"
            description="Break your plans into concrete actions and keep track of your progress."
            action="View Tasks"
            onClick={() => navigate("/tasks")}
          />

          <FeatureCard
            icon={<Goal size={18} />}
            title="Goals"
            description="Define meaningful goals and use AI to analyze them and suggest next steps."
            action="Manage Goals"
            onClick={() => navigate("/goals")}
          />
        </section>

        {/* HOW DECISA WORKS */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-white">
              How Decisa works
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              A simple workflow for turning an idea into action.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <StepCard
              number="01"
              title="Define"
              description="Create a plan or goal and describe what you want to achieve."
            />

            <StepCard
              number="02"
              title="Analyze"
              description="Let Decisa help break down your goal and identify useful next steps."
            />

            <StepCard
              number="03"
              title="Act"
              description="Turn the result into tasks you can actually work on."
            />
          </div>
        </section>

        {/* QUICK ACTION */}
        <section
          className="
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-5
            sm:p-6
          "
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to get started?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Create a plan and start turning your next decision
                into action.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/plans")}
              className="
                inline-flex
                h-9
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                px-4
                text-xs
                font-medium
                text-slate-200
                transition
                hover:bg-white/[0.06]
              "
            >
              Create a Plan
              <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  onClick: () => void;
}

function FeatureCard({
  icon,
  title,
  description,
  action,
  onClick,
}: FeatureCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.02]
        p-5
        text-left
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-white/[0.12]
        hover:bg-white/[0.035]
      "
    >
      <div
        className="
          mb-5
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-white/[0.04]
          text-slate-400
          transition
          group-hover:bg-indigo-500/10
          group-hover:text-indigo-400
        "
      >
        {icon}
      </div>

      <h3 className="text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 min-h-[60px] text-xs leading-relaxed text-slate-500">
        {description}
      </p>

      <div
        className="
          mt-5
          flex
          items-center
          gap-1.5
          text-xs
          font-medium
          text-slate-500
          transition
          group-hover:text-indigo-400
        "
      >
        {action}
        <ArrowRight size={13} />
      </div>
    </button>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.015]
        p-5
      "
    >
      <span
        className="
          text-[10px]
          font-semibold
          tracking-wider
          text-indigo-400
        "
      >
        {number}
      </span>

      <h3 className="mt-3 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}