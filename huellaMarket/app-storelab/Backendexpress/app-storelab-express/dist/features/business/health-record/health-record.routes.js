"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRecordRoutes = void 0;
const access_1 = require("../../auth/access");
const health_record_controller_1 = require("./health-record.controller");
class HealthRecordRoutes {
    constructor() {
        this.healthRecordController = new health_record_controller_1.HealthRecordController();
    }
    routes(app) {
        app
            .route("/api/fichas-sanitarias")
            .get(...access_1.jwtRbac, this.healthRecordController.getAll.bind(this.healthRecordController))
            .post(...access_1.jwtRbac, this.healthRecordController.create.bind(this.healthRecordController));
        app
            .route("/api/fichas-sanitarias/:id")
            .get(...access_1.jwtRbac, this.healthRecordController.getOne.bind(this.healthRecordController))
            .put(...access_1.jwtRbac, this.healthRecordController.updatePut.bind(this.healthRecordController))
            .patch(...access_1.jwtRbac, this.healthRecordController.updatePatch.bind(this.healthRecordController))
            .delete(...access_1.jwtRbac, this.healthRecordController.deletePhysical.bind(this.healthRecordController));
        app
            .route("/api/fichas-sanitarias/:id/deactivate")
            .patch(...access_1.jwtRbac, this.healthRecordController.deleteLogical.bind(this.healthRecordController));
    }
}
exports.HealthRecordRoutes = HealthRecordRoutes;
//# sourceMappingURL=health-record.routes.js.map