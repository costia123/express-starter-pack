import type { Request, Response } from "express";
import { AppError } from "../types/http";

const items = [
  { id: "1", name: "Exemple 1" },
  { id: "2", name: "Exemple 2" },
];

export function listItems(_req: Request, res: Response) {
  res.json({
    success: true,
    data: items,
  });
}

export function getItem(req: Request, res: Response) {
  const item = items.find((entry) => entry.id === req.params.id);

  if (!item) {
    throw new AppError(404, "Élément introuvable", "ITEM_NOT_FOUND");
  }

  res.json({
    success: true,
    data: item,
  });
}
