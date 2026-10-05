"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRoutes = void 0;
const session_controller_1 = require("./session.controller");
const access_1 = require("../access");
/**
 * Rutas del feature Session.
 *
 * OPEN:
 * - login
 * - refresh
 * - logout
 *
 * JWT:
 * - perfil
 * - permisos
 */
class SessionRoutes {
    constructor() {
        this.sessionController = new session_controller_1.SessionController();
    }
    routes(app) {
        // LOGIN — OPEN
        app
            .route("/api/sesion/login")
            .post(this.sessionController.login.bind(this.sessionController));
        // REFRESH — OPEN + refresh token
        app
            .route("/api/sesion/refresh")
            .post(this.sessionController.refresh.bind(this.sessionController));
        // LOGOUT — OPEN + refresh token
        app
            .route("/api/sesion/logout")
            .post(this.sessionController.logout.bind(this.sessionController));
        // PERFIL — JWT
        app
            .route("/api/sesion/perfil")
            .get(access_1.authenticate, this.sessionController.profile.bind(this.sessionController));
        // PERMISOS — JWT
        app
            .route("/api/permisos")
            .get(access_1.authenticate, this.sessionController.myPermissions.bind(this.sessionController));
    }
}
exports.SessionRoutes = SessionRoutes;
//# sourceMappingURL=session.routes.js.map