"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetailRoutes = void 0;
const access_1 = require("../../auth/access");
const sale_detail_controller_1 = require("./sale-detail.controller");
class SaleDetailRoutes {
    constructor() {
        this.controller = new sale_detail_controller_1.SaleDetailController();
    }
    routes(app) {
        app
            .route("/api/venta-detalles")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/venta-detalles/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
    }
}
exports.SaleDetailRoutes = SaleDetailRoutes;
//# sourceMappingURL=sale-detail.routes.js.map