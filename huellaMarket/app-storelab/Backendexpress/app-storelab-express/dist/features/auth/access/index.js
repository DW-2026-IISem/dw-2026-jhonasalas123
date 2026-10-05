"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.authorize = authorize;
const app_error_1 = require("../../../shared/errors/app-error");
const jwt_1 = require("../../../shared/auth/jwt");
async function authenticate(req, _res, next) {
    try {
        const token = (0, jwt_1.extractBearerToken)(req.headers.authorization);
        if (!token) {
            throw new app_error_1.AppError(401, "Token de acceso requerido");
        }
        const payload = (0, jwt_1.verifyAccessToken)(token);
        req.auth = {
            id: Number(payload.sub),
            username: payload.username,
            tokenId: payload.jti,
        };
        next();
    }
    catch (error) {
        next(error);
    }
}
function authorize(_req, _res, next) {
    next();
}
//# sourceMappingURL=index.js.map