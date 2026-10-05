"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRoutes = void 0;
const session_controller_1 = require("./session.controller");
class SessionRoutes {
    constructor() {
        this.controller = new session_controller_1.SessionController();
    }
    routes(app) {
        app.post("/api/auth/login", this.controller.login);
    }
}
exports.SessionRoutes = SessionRoutes;
//# sourceMappingURL=session.routes.js.map