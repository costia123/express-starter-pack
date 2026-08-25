import type { Request, Response } from "express";

export function getHealth(_req: Request, res: Response) {
  res.json({
    success: true,
    data: {
      status: "ok",
      service: "my_darts-api",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
  });
}
