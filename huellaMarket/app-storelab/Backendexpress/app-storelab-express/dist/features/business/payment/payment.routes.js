"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const payment_controller_1 = require("./payment.controller");
class PaymentRoutes {
    constructor() {
        this.controller = new payment_controller_1.PaymentController();
    }
    routes(app) {
        app.get("/api/pagos", this.controller.getAll.bind(this.controller));
        app.get("/api/pagos/:id", this.controller.getOne.bind(this.controller));
        app.post("/api/pagos", this.controller.create.bind(this.controller));
        app.put("/api/pagos/:id", this.controller.updatePut.bind(this.controller));
        app.patch("/api/pagos/:id", this.controller.updatePatch.bind(this.controller));
        app.delete("/api/pagos/:id", this.controller.deletePhysical.bind(this.controller));
    }
}
exports.PaymentRoutes = PaymentRoutes;
//# sourceMappingURL=payment.routes.js.map