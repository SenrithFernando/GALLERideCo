const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
export const api = (path: string) => `${apiBase}${path}`;
