import { Router } from "express";
import { getItem, listItems } from "../controllers/example.controller";

export const exampleRouter = Router();

exampleRouter.get("/", listItems);
exampleRouter.get("/:id", getItem);
