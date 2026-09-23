import {
    ArrowLeft,
    ArrowRight,
    Lock,
    Mail,
    Sparkles,
    User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

export default function Register() {
    const navigate = useNavigate();

    const { register } = useAuth();

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Password do not match.");
            return;
        }

        try {
            await register(displayName, email, password);

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Unable to connect to server.")
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/[0.08] blur-[140px]" />

                <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.08] blur-[120px]" />

                <div className="absolute -right-40 top-0 h-[350px] w-[350px] rounded-full bg-violet-500/[0.07] blur-[120px]" />
            </div>


            {/* Navbar */}
            <header className="relative z-10 border-b border-white/[0.06]">
                <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                    {/* Logo */}
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg shadow-indigo-500/20">
                            <Sparkles size={15} />
                        </div>

                        <span className="text-sm font-semibold tracking-[0.22em]">
                            DECISA
                        </span>
                    </button>


                    {/* Back */}
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                    >
                        <ArrowLeft size={15} />
                        Back to home
                    </button>

                </nav>
            </header>


            {/* Main */}
            <main className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">

                <div className="w-full max-w-md">

                    {/* Header */}
                    <div className="text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                            <Sparkles
                                size={21}
                                className="text-indigo-300"
                            />
                        </div>

                        <h1 className="mt-6 text-3xl font-medium tracking-tight">
                            Create your account
                        </h1>

                        <p className="mt-2 text-sm text-zinc-500">
                            Start turning your goals into action.
                        </p>

                    </div>


                    {/* Card */}
                    <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="displayName"
                                    className="mb-2 block text-sm text-zinc-300"
                                >
                                    Name
                                </label>

                                <div className="relative">
                                    <User
                                        size={17}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                                    />

                                    <input
                                        id="displayName"
                                        type="text"
                                        value={displayName}
                                        onChange={(event) =>
                                            setDisplayName(event.target.value)
                                        }
                                        placeholder="Your name"
                                        required
                                        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/10"
                                    />
                                </div>
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm text-zinc-300"
                                >
                                    Email
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={17}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        placeholder="you@example.com"
                                        required
                                        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/10"
                                    />
                                </div>
                            </div>


                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm text-zinc-300"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={17}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                                    />

                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        placeholder="Create a password"
                                        required
                                        minLength={8}
                                        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/10"
                                    />
                                </div>
                            </div>


                            {/* Confirm password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm text-zinc-300"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={17}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                                    />

                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(event) =>
                                            setConfirmPassword(event.target.value)
                                        }
                                        placeholder="Repeat your password"
                                        required
                                        minLength={8}
                                        className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/10"
                                    />
                                </div>
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-medium shadow-lg shadow-indigo-500/15 transition hover:scale-[1.01] hover:shadow-indigo-500/25"
                            >
                                Create Account

                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            </button>

                        </form>


                        {/* Login */}
                        <p className="mt-7 text-center text-sm text-zinc-500">
                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="font-medium text-indigo-300 transition hover:text-indigo-200"
                            >
                                Sign in
                            </Link>
                        </p>

                    </div>

                </div>

            </main>
        </div>
    );
}