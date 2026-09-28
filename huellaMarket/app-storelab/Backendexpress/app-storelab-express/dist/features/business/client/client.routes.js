"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRoutes = void 0;
const client_controller_1 = require("./client.controller");
class ClientRoutes {
    constructor() {
        this.clientController = new client_controller_1.ClientController();
    }
    routes(app) {
        // ================== RUTAS SIN AUTENTICACIÓN / SIN MIDDLEWARE JWT ==================
        // (rellenar en ISS-03-B…E)
    }
}
exports.ClientRoutes = ClientRoutes;
//# sourceMappingURL=client.routes.js.map