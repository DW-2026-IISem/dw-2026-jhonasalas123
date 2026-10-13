"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAppointmentRoutes = void 0;
const access_1 = require("../../auth/access");
const service_appointment_controller_1 = require("./service-appointment.controller");
class ServiceAppointmentRoutes {
    constructor() {
        this.controller = new service_appointment_controller_1.ServiceAppointmentController();
    }
    routes(app) {
        app
            .route("/api/citas-servicio")
            .get(...access_1.jwtRbac, this.controller.getAll.bind(this.controller))
            .post(...access_1.jwtRbac, this.controller.create.bind(this.controller));
        app
            .route("/api/citas-servicio/:id")
            .get(...access_1.jwtRbac, this.controller.getOne.bind(this.controller))
            .put(...access_1.jwtRbac, this.controller.updatePut.bind(this.controller))
            .patch(...access_1.jwtRbac, this.controller.updatePatch.bind(this.controller))
            .delete(...access_1.jwtRbac, this.controller.deletePhysical.bind(this.controller));
        app
            .route("/api/citas-servicio/:id/deactivate")
            .patch(...access_1.jwtRbac, this.controller.deleteLogical.bind(this.controller));
    }
}
exports.ServiceAppointmentRoutes = ServiceAppointmentRoutes;
//# sourceMappingURL=service-appointment.routes.js.map