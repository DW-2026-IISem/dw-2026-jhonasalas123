"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRoutes = void 0;
const access_1 = require("../../auth/access");
const sale_controller_1 = require("./sale.controller");
class SaleRoutes {
    constructor() {
        this.controller = new sale_controller_1.SaleController();
    }
    routes(app) {
        app
            .route("/api/ventas")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/ventas/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
    }
}
exports.SaleRoutes = SaleRoutes;
//# sourceMappingURL=sale.routes.js.map