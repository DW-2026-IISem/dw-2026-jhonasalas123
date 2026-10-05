"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
const app_error_1 = require("../../../shared/errors/app-error");
const error_response_1 = require("../../../shared/http/error-response");
const resource_match_1 = require("../../../shared/auth/resource-match");
const resource_roles_repository_1 = require("../resource-roles/resource-roles.repository");
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
const resourceRolesRepository = new resource_roles_repository_1.ResourceRolesRepository();
async function authorize(req, res, next) {
    try {
        if (!req.auth) {
            throw new app_error_1.AppError(401, "Authentication required");
        }
        const method = req.method.toUpperCase();
        const path = (0, resource_match_1.normalizePath)(req.originalUrl);
        const granted = await resourceRolesRepository.findEffectiveForUser(req.auth.id);
        if (!(0, resource_match_1.isOperationGranted)(granted, method, path)) {
            throw new app_error_1.AppError(403, `Forbidden: no grant for ${method} ${path}`);
        }
        next();
    }
    catch (error) {
        (0, error_response_1.sendError)(res, error);
    }
}
//# sourceMappingURL=authorize.middleware.js.map