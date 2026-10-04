"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRoutes = void 0;
const sale_controller_1 = require("./sale.controller");
class SaleRoutes {
    constructor() {
        this.controller = new sale_controller_1.SaleController();
    }
    routes(app) {
        // ISS-03-B — READ
        app.get("/api/ventas", this.controller.getAll.bind(this.controller));
        app.get("/api/ventas/:id", this.controller.getOne.bind(this.controller));
        // ISS-03-C — CREATE
        app.post("/api/ventas", this.controller.create.bind(this.controller));
        // ISS-03-D — UPDATE
        app.put("/api/ventas/:id", this.controller.updatePut.bind(this.controller));
        app.patch("/api/ventas/:id", this.controller.updatePatch.bind(this.controller));
        // ISS-03-E — DELETE
        app.delete("/api/ventas/:id", this.controller.deletePhysical.bind(this.controller));
    }
}
exports.SaleRoutes = SaleRoutes;
//# sourceMappingURL=sale.routes.js.map