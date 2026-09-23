import {
  ArrowRight,
  Sparkles,
  Target,
  CheckSquare,
  TrendingUp,
  Brain,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: Target,
    title: "Set Your Goal",
    description: "Tell Decisa what you want to achieve.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Get insights, timelines, and key areas.",
  },
  {
    icon: CheckSquare,
    title: "Actionable Tasks",
    description: "Turn AI suggestions into real tasks.",
  },
  {
    icon: TrendingUp,
    title: "Make Progress",
    description: "Stay organized and move toward your goals.",
  },
];

const technologies = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
];

export default function Landing() {
  const navigate = useNavigate();

  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090B] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top right glow */}
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[140px]" />

        {/* Bottom left glow */}
        <div className="absolute -left-40 top-[500px] h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[140px]" />

        {/* Subtle center glow */}
        <div className="absolute left-1/2 top-[280px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/[0.04] blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 border-b border-white/[0.06]">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg shadow-indigo-500/20">
              <Sparkles size={16} className="text-white" />
            </div>

            <span className="text-sm font-semibold tracking-[0.22em]">
              DECISA
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <button
              onClick={scrollToHowItWorks}
              className="transition hover:text-white"
            >
              How It Works
            </button>

            <a
              href="#features"
              className="transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white sm:block"
            >
              Sign In
            </button>

            <button
              onClick={() => navigate("/register")}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Get Started
              <ArrowRight size={15} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="relative">
          {/* Decorative orbital line */}
          <div className="pointer-events-none absolute left-0 top-24 hidden h-40 w-[420px] -translate-x-1/3 -rotate-12 rounded-full border border-indigo-400/10 lg:block" />

          <div className="pointer-events-none absolute right-0 top-80 hidden h-64 w-[420px] translate-x-1/3 rotate-12 rounded-full border border-blue-400/10 lg:block" />

          {/* Small glowing points */}
          <div className="pointer-events-none absolute left-[13%] top-52 hidden h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(96,165,250,0.35)] lg:block" />

          <div className="pointer-events-none absolute right-[14%] top-[430px] hidden h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_20px_5px_rgba(129,140,248,0.35)] lg:block" />

          <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-24 text-center lg:px-10">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
              <Sparkles size={14} className="text-blue-400" />
              <span>Your Goals</span>
              <span className="text-zinc-600">+</span>
              <span>AI</span>
              <span className="text-zinc-600">=</span>
              <span className="text-white">Action</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-5xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Decide better.
              <br />

              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Do what matters.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Decisa turns your goals into clear, actionable plans
              with AI-powered guidance.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/register")}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-3.5 text-sm font-medium shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02] hover:shadow-indigo-500/30"
              >
                Get Started

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                See How It Works
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Steps */}
            <div
              id="how-it-works"
              className="mt-28 w-full max-w-6xl scroll-mt-24"
            >
              <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-0">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="relative flex flex-col items-center px-6"
                    >
                      {/* Connector */}
                      {index !== steps.length - 1 && (
                        <div className="absolute left-[calc(50%+70px)] top-7 hidden h-px w-[calc(100%-140px)] bg-gradient-to-r from-white/10 to-white/[0.03] md:block" />
                      )}

                      {/* Icon */}
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#111116] shadow-xl shadow-black/30">
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                          className="text-zinc-200"
                        />
                      </div>

                      <h3 className="mt-5 text-sm font-medium">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[180px] text-xs leading-5 text-zinc-500">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 flex items-center gap-3 text-xs text-zinc-600">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10">
                <ChevronDown size={14} />
              </div>

              <span>Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-white/[0.06]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
                Built around your goals
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                From intention to execution.
              </h2>

              <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">
                Decisa helps you understand what you want to achieve
                and turn it into concrete actions you can actually
                work on.
              </p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {/* Goal */}
              <FeatureCard
                icon={<Target size={20} />}
                title="Goals"
                description="Define meaningful goals with priorities and target dates."
              />

              {/* AI */}
              <FeatureCard
                icon={<Sparkles size={20} />}
                title="AI Goal Analysis"
                description="Let AI evaluate your goal and identify key areas, difficulty, and realistic timelines."
              />

              {/* Tasks */}
              <FeatureCard
                icon={<CheckSquare size={20} />}
                title="Actionable Tasks"
                description="Turn AI recommendations into tasks that you can accept, edit, and complete."
              />

              {/* Plans */}
              <FeatureCard
                icon={<TrendingUp size={20} />}
                title="Plans"
                description="Organize your work and keep your tasks connected to bigger objectives."
              />
            </div>
          </div>
        </section>

        {/* About / Product philosophy */}
        <section
          id="about"
          className="border-t border-white/[0.06]"
        >
          <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                  Why Decisa
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
                  A goal is only useful
                  <br />
                  when you can act on it.
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-zinc-500">
                  Big goals can easily become overwhelming. Decisa
                  helps bridge the gap between knowing what you want
                  and knowing what to do next.
                </p>

                <button
                  onClick={() => navigate("/register")}
                  className="group mt-8 flex items-center gap-2 text-sm font-medium text-white"
                >
                  Start planning with Decisa
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/[0.06]">
          <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-32 text-center lg:px-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Start today
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
              Ready to make your next goal actionable?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
              Turn your ideas into clear steps with Decisa.
            </p>

            <button
              onClick={() => navigate("/register")}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500">
                  <Sparkles size={14} />
                </div>

                <span className="text-sm font-semibold tracking-[0.2em]">
                  DECISA
                </span>
              </div>

              <p className="mt-3 text-xs text-zinc-600">
                Decide better. Do what matters.
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center gap-6"
                >
                  <span className="text-xs text-zinc-600 transition hover:text-zinc-400">
                    {tech}
                  </span>

                  {index !== technologies.length - 1 && (
                    <span className="hidden h-4 w-px bg-white/[0.08] sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/[0.05] pt-6 text-xs text-zinc-700">
            © 2026 Decisa. Built with purpose.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* -----------------------------
   Feature Card
------------------------------ */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition duration-300 hover:border-indigo-400/20 hover:bg-white/[0.035]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-indigo-300">
        {icon}
      </div>

      <h3 className="mt-6 text-base font-medium">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}