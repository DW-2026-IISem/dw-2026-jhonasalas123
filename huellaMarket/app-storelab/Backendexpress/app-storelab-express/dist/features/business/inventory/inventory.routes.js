"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRoutes = void 0;
const inventory_controller_1 = require("./inventory.controller");
class InventoryRoutes {
    constructor() {
        this.controller = new inventory_controller_1.InventoryController();
    }
    routes(app) {
        // ISS-03-B — READ
        app.get("/api/inventarios", this.controller.getAll.bind(this.controller));
        app.get("/api/inventarios/:id", this.controller.getOne.bind(this.controller));
        // ISS-03-C — CREATE
        app.post("/api/inventarios", this.controller.create.bind(this.controller));
        // ISS-03-D — UPDATE
        app.put("/api/inventarios/:id", this.controller.updatePut.bind(this.controller));
        app.patch("/api/inventarios/:id", this.controller.updatePatch.bind(this.controller));
        // ISS-03-E — DELETE físico
        app.delete("/api/inventarios/:id", this.controller.deletePhysical.bind(this.controller));
    }
}
exports.InventoryRoutes = InventoryRoutes;
//# sourceMappingURL=inventory.routes.js.map