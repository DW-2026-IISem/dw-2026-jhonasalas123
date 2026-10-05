"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokensRoutes = void 0;
const refresh_tokens_controller_1 = require("./refresh-tokens.controller");
const access_1 = require("../access");
/**
 * Rutas de RefreshTokens.
 *
 * Modalidad JWT sin RBAC.
 * Solo permiten operar sobre las sesiones del usuario autenticado.
 */
class RefreshTokensRoutes {
    constructor() {
        this.refreshTokensController = new refresh_tokens_controller_1.RefreshTokensController();
    }
    routes(app) {
        // Listar sesiones propias
        app
            .route("/api/sesiones")
            .get(access_1.authenticate, this.refreshTokensController.getAll.bind(this.refreshTokensController));
        // Revocar todas las sesiones
        app
            .route("/api/sesiones/deactivate-all")
            .patch(access_1.authenticate, this.refreshTokensController.revokeAll.bind(this.refreshTokensController));
        // Consultar una sesión propia
        app
            .route("/api/sesiones/:id")
            .get(access_1.authenticate, this.refreshTokensController.getOne.bind(this.refreshTokensController));
        // Revocar una sesión concreta
        app
            .route("/api/sesiones/:id/deactivate")
            .patch(access_1.authenticate, this.refreshTokensController.revokeOne.bind(this.refreshTokensController));
        // Purga de sesiones propias
        app
            .route("/api/sesiones")
            .delete(access_1.authenticate, this.refreshTokensController.purge.bind(this.refreshTokensController));
    }
}
exports.RefreshTokensRoutes = RefreshTokensRoutes;
//# sourceMappingURL=refresh-tokens.routes.js.map