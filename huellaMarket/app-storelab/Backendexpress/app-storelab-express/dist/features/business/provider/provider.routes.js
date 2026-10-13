"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRoutes = void 0;
const access_1 = require("../../auth/access");
const provider_controller_1 = require("./provider.controller");
class ProviderRoutes {
    constructor() {
        this.controller = new provider_controller_1.ProviderController();
    }
    routes(app) {
        app
            .route("/api/proveedores")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/proveedores/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
        app
            .route("/api/proveedores/:id/deactivate")
            .patch(...access_1.jwtRbac, this.controller.deleteLogical.bind(this.controller));
    }
}
exports.ProviderRoutes = ProviderRoutes;
//# sourceMappingURL=provider.routes.js.map