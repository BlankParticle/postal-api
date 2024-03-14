const KEYS = [
  "DATABASE_HOST",
  "DATABASE_PORT",
  "DATABASE_USER",
  "DATABASE_PASSWORD",
  "SERVER_ROUTES_DOMAIN",
] as const;

type Env = {
  [K in (typeof KEYS)[number]]: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
KEYS.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable ${key}`);
  }
});

export {};
