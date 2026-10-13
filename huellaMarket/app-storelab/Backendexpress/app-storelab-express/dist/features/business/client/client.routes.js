"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRoutes = void 0;
const access_1 = require("../../auth/access");
const client_controller_1 = require("./client.controller");
class ClientRoutes {
    constructor() {
        this.clientController = new client_controller_1.ClientController();
    }
    routes(app) {
        app
            .route("/api/clientes")
            .get(...access_1.jwtRbac, this.clientController.getAll.bind(this.clientController))
            .post(...access_1.jwtRbac, this.clientController.create.bind(this.clientController));
        app
            .route("/api/clientes/:id")
            .get(...access_1.jwtRbac, this.clientController.getOne.bind(this.clientController))
            .put(...access_1.jwtRbac, this.clientController.updatePut.bind(this.clientController))
            .patch(...access_1.jwtRbac, this.clientController.updatePatch.bind(this.clientController))
            .delete(...access_1.jwtRbac, this.clientController.deletePhysical.bind(this.clientController));
        app
            .route("/api/clientes/:id/deactivate")
            .patch(...access_1.jwtRbac, this.clientController.deleteLogical.bind(this.clientController));
    }
}
exports.ClientRoutes = ClientRoutes;
//# sourceMappingURL=client.routes.js.map