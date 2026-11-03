import type { RequestHandler } from "express";

import { authenticate } from "./authenticate.middleware";
import { authorize } from "./authorize.middleware";

export * from "./authenticate.middleware";
export * from "./authorize.middleware";

/** JWT: autenticación sin autorización por permisos. */
export const jwtOnly: RequestHandler[] = [authenticate];

/** JWT + RBAC: autenticación y autorización por permisos. */
export const jwtRbac: RequestHandler[] = [authenticate, authorize];
