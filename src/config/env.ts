import dotenv from "dotenv";

dotenv.config();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Variable d'environnement manquante : ${name}`);
  }
  return value;
}

export const env = {
  port: Number(required("PORT", "3000")),
  nodeEnv: required("NODE_ENV", "development"),
  corsOrigin: required("CORS_ORIGIN", "http://localhost:8081"),
  isDev: (process.env.NODE_ENV ?? "development") !== "production",
} as const;
