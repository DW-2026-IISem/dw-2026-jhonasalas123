"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
const app_error_1 = require("../../../shared/errors/app-error");
const error_response_1 = require("../../../shared/http/error-response");
const jwt_1 = require("../../../shared/auth/jwt");
const users_repository_1 = require("../users/users.repository");
const usersRepository = new users_repository_1.UsersRepository();
/**
 * Modalidad JWT — autenticación.
 *
 * 1. Lee Authorization: Bearer <token>.
 * 2. Verifica firma, algoritmo, issuer, audience y expiración.
 * 3. Revalida que el usuario exista y permanezca activo en BD.
 * 4. Deja la identidad en req.auth.
 *
 * No consulta roles ni permisos.
 */
async function authenticate(req, res, next) {
    try {
        const token = (0, jwt_1.extractBearerToken)(req.headers.authorization);
        if (!token) {
            throw new app_error_1.AppError(401, "Missing Bearer token");
        }
        const payload = (0, jwt_1.verifyAccessToken)(token);
        const userId = Number(payload.sub);
        if (!Number.isInteger(userId) || userId < 1) {
            throw new app_error_1.AppError(401, "Invalid or expired access token");
        }
        const user = await usersRepository.findById(userId);
        if (!user || user.status !== "active") {
            throw new app_error_1.AppError(401, "User is not active");
        }
        req.auth = {
            id: user.id,
            username: user.username,
            email: user.email,
            tokenId: payload.jti,
        };
        next();
    }
    catch (error) {
        (0, error_response_1.sendError)(res, error);
    }
}
//# sourceMappingURL=authenticate.middleware.js.map