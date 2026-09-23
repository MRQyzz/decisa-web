export interface User {
    id: string;
    email: string;
    displayName: string;
    username?: string | null;
    avatarUrl?: string | null;
    bio?: string | null;
    location?: string | null;
    websiteUrl?: string | null;
    githubUrl?: string | null;
    createdAt?: string;
    lastLoginAt?: string | null;
}