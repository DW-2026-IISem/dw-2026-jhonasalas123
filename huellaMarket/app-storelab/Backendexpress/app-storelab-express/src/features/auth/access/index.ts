import type { RequestHandler } from "express";

export * from "./authenticate.middleware";
export * from "./authorize.middleware";

/**
 * MODO TEMPORAL DE DESARROLLO:
 * Rutas abiertas, sin autenticación ni autorización.
 * Reactivar los middlewares cuando la guía lo solicite.
 */
export const jwtRbac: RequestHandler[] = [];
export const jwtOnly: RequestHandler[] = [];
