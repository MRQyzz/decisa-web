import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { FunctionResponseScheduling } from "@google/genai";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET ?? "";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? "";

if (!ACCESS_SECRET) {
    throw new Error("JWT_ACCESS_SECRET is not defined");
}

if (!REFRESH_SECRET) {
    throw new Error("JWT_REFRESH_SECRET is not defined");
}

export const ACCESS_TOKEN_EXPIRES_IN = 15 * 60;
export const REFRESH_TOKEN_EXPIRES_IN_DAYS = "30";

export async function hashPassword(password: string) {
    return bcrypt.hash(password, 12);
}

export async function comparePassword (
    password: string,
    hashPassword: string,
) {
    return bcrypt.compare(password, hashPassword)
}

export function createAccessToken(userId: string) {
    return jwt.sign(
        {
            userId,
            type: "access",
        },
        ACCESS_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRES_IN,
        },
    );
}
export function createRefreshToken(userId: string) {
    return jwt.sign(
        {
            userId,
            type: "refresh",
            jti: crypto.randomUUID(),
        },
        REFRESH_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRES_IN_DAYS,
        },
    );
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, ACCESS_SECRET) as {
        userId: string;
        type: "access";
    };
}

export function verifyRefreshToken(token: string) {
    return jwt.verify(token, REFRESH_SECRET) as {
        userId: string;
        type: "refresh";
        jti: string;
    };
}

export function hashRefreshToken(token: string) {
    return crypto
        .createHash("sha256")
        .update(token)
        .digest("hex")
}