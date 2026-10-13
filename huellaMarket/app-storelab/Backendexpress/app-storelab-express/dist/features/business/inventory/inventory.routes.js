"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRoutes = void 0;
const access_1 = require("../../auth/access");
const inventory_controller_1 = require("./inventory.controller");
class InventoryRoutes {
    constructor() {
        this.controller = new inventory_controller_1.InventoryController();
    }
    routes(app) {
        app
            .route("/api/inventarios")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/inventarios/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
    }
}
exports.InventoryRoutes = InventoryRoutes;
//# sourceMappingURL=inventory.routes.js.map