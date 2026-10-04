"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const product_controller_1 = require("./product.controller");
class ProductRoutes {
    constructor() {
        this.controller = new product_controller_1.ProductController();
    }
    routes(app) {
        // ISS-03-B — READ
        app.get("/api/productos", this.controller.getAll.bind(this.controller));
        app.get("/api/productos/:id", this.controller.getOne.bind(this.controller));
        // ISS-03-C — CREATE
        app.post("/api/productos", this.controller.create.bind(this.controller));
        // ISS-03-D — UPDATE
        app.put("/api/productos/:id", this.controller.updatePut.bind(this.controller));
        app.patch("/api/productos/:id", this.controller.updatePatch.bind(this.controller));
        // ISS-03-E — DELETE
        app.delete("/api/productos/:id", this.controller.deletePhysical.bind(this.controller));
        app.delete("/api/productos/:id/deactivate", this.controller.deleteLogical.bind(this.controller));
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product.routes.js.map