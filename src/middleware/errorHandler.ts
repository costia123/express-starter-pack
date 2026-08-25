import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env";
import { AppError } from "../types/http";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        code: err.code,
      },
    });
    return;
  }

  console.error(err);

  res.status(500).json({
    success: false,
    error: {
      message: env.isDev && err instanceof Error ? err.message : "Erreur interne du serveur",
      code: "INTERNAL_ERROR",
    },
  });
}
