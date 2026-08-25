import { Router } from "express";
import { exampleRouter } from "./example.routes";
import { healthRouter } from "./health.routes";

export const router = Router();

router.use("/health", healthRouter);
router.use("/items", exampleRouter);
