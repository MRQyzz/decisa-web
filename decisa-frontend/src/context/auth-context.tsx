import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { apiFetch } from "../lib/api";
import type { User } from "../types/auth";

interface AuthContextValue {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;

    login: (
        email: string,
        password: string,
    ) => Promise<void>;

    register: (
        displayName: string,
        email: string,
        password: string,
    ) => Promise<void>;

    logout: () => Promise<void>;

    refreshUser: () => Promise<void>;
}

interface AuthResponse {
    user: User;
}

const AuthContext = createContext<
    AuthContextValue | undefined
>(undefined);

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    async function refreshUser() {
        try {
            const data = await apiFetch<AuthResponse>(
                "/api/auth/me",
            );

            setUser(data.user);
        } catch {
            setUser(null);
        }
    }

    async function login(
        email: string,
        password: string,
    ) {
        const data = await apiFetch<AuthResponse>(
            "/api/auth/login",
            {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
            },
        );

        setUser(data.user);
    }

    async function register(
        displayName: string,
        email: string,
        password: string,
    ) {
        const data = await apiFetch<AuthResponse>(
            "/api/auth/register",
            {
                method: "POST",
                body: JSON.stringify({
                    displayName,
                    email,
                    password,
                }),
            },
        );

        setUser(data.user);
    }

    async function logout() {
        try {
            await apiFetch("/api/auth/logout", {
                method: "POST",
            });
        } finally {
            setUser(null);
        }
    }

    useEffect(() => {
        async function initializeAuth() {
            await refreshUser();
            setLoading(false);
        }

        initializeAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isAuthenticated: user !== null,
                login,
                register,
                logout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider",
        );
    }

    return context;
}