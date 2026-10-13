import { RequestHandler } from "express";
import { authenticate } from "./authenticate.middleware";
import { authorize } from "./authorize.middleware";

export * from "./authenticate.middleware";
export * from "./authorize.middleware";

/** Modalidad JWT + RBAC: identidad y concesión method+path. */
export const jwtRbac: RequestHandler[] = [authenticate, authorize];

/** Modalidad JWT: identidad, sin consultar la matriz de permisos. */
export const jwtOnly: RequestHandler[] = [authenticate];
