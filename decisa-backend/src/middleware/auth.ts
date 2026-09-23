import type { Request, Response, NextFunction } from "express";
import {verifyAccessToken} from "../lib/auth.js";
import { extend } from "zod/mini";

export interface AuthRequest extends Request {
    userId?: string;
}

export function requireAuth(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
) {
    const token = req.cookies?.accessToken;

    if(!token) {
        return res.status(401).json({
            message: "Authentication required",
        });
    }

    try {
        const payload = verifyAccessToken(token);

        if (payload.type !== "access") {
            return res.status(401).json({
                message: "Invalid access token",
            });
        }

        req.userId = payload.userId;

        next()
    } catch {
        return res.status(401).json({
            message: "Invalid or expired access token",
        });
    }
}