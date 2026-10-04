"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetailRoutes = void 0;
const sale_detail_controller_1 = require("./sale-detail.controller");
class SaleDetailRoutes {
    constructor() {
        this.controller = new sale_detail_controller_1.SaleDetailController();
    }
    routes(app) {
        app.get("/api/venta-detalles", this.controller.getAll.bind(this.controller));
        app.get("/api/venta-detalles/:id", this.controller.getOne.bind(this.controller));
        app.post("/api/venta-detalles", this.controller.create.bind(this.controller));
        app.put("/api/venta-detalles/:id", this.controller.updatePut.bind(this.controller));
        app.patch("/api/venta-detalles/:id", this.controller.updatePatch.bind(this.controller));
        app.delete("/api/venta-detalles/:id", this.controller.deletePhysical.bind(this.controller));
    }
}
exports.SaleDetailRoutes = SaleDetailRoutes;
//# sourceMappingURL=sale-detail.routes.js.map