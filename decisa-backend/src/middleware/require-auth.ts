import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../lib/auth.js";

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

export function requireAuth(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) {
    try {
        const accessToken = req.cookies?.accessToken;

        if (!accessToken) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const payload = verifyAccessToken(accessToken);

        if (payload.type !== "access") {
            return res.status(401).json({
                message: "Invalid access token",
            });
        }

        req.userId = payload.userId;

        next();
    } catch {
        return res.status(401).json({
            message: "Invalid or expired access token",
        });
    }
}