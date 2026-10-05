import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../shared/errors/app-error";
import { sendError } from "../../../shared/http/error-response";
import {
  isOperationGranted,
  normalizePath,
} from "../../../shared/auth/resource-match";
import { ResourceRolesRepository } from "../resource-roles/resource-roles.repository";

/**
 * Modalidad RBAC — autorización.
 *
 * Debe ejecutarse después de `authenticate`.
 *
 * 1. Comprueba que exista una identidad en req.auth.
 * 2. Obtiene el método y la ruta real de la petición.
 * 3. Consulta los permisos efectivos del usuario.
 * 4. Comprueba si existe una concesión para method + path.
 * 5. Si no existe permiso, aplica deny-by-default con 403.
 *
 * No recibe parámetros: el recurso y la acción se derivan
 * directamente de la petición HTTP.
 */
const resourceRolesRepository = new ResourceRolesRepository();

export async function authorize(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!req.auth) {
      throw new AppError(401, "Authentication required");
    }

    const method = req.method.toUpperCase();
    const path = normalizePath(req.originalUrl);

    const granted =
      await resourceRolesRepository.findEffectiveForUser(req.auth.id);

    if (!isOperationGranted(granted, method, path)) {
      throw new AppError(
        403,
        `Forbidden: no grant for ${method} ${path}`
      );
    }

    next();
  } catch (error) {
    sendError(res, error);
  }
}
