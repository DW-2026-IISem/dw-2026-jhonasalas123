"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const access_1 = require("../../auth/access");
const product_controller_1 = require("./product.controller");
class ProductRoutes {
    constructor() {
        this.controller = new product_controller_1.ProductController();
    }
    routes(app) {
        app
            .route("/api/productos")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/productos/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
        app
            .route("/api/productos/:id/deactivate")
            .patch(...access_1.jwtRbac, this.controller.deleteLogical.bind(this.controller));
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product.routes.js.map