"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const access_1 = require("../../auth/access");
const payment_controller_1 = require("./payment.controller");
class PaymentRoutes {
    constructor() {
        this.controller = new payment_controller_1.PaymentController();
    }
    routes(app) {
        app
            .route("/api/pagos")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/pagos/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
    }
}
exports.PaymentRoutes = PaymentRoutes;
//# sourceMappingURL=payment.routes.js.map