"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRecordRoutes = void 0;
const health_record_controller_1 = require("./health-record.controller");
class HealthRecordRoutes {
    constructor() {
        this.healthRecordController = new health_record_controller_1.HealthRecordController();
    }
    routes(app) {
        app
            .route("/api/fichas-sanitarias")
            .get(this.healthRecordController.getAll.bind(this.healthRecordController))
            .post(this.healthRecordController.create.bind(this.healthRecordController));
        app
            .route("/api/fichas-sanitarias/:id")
            .get(this.healthRecordController.getOne.bind(this.healthRecordController))
            .put(this.healthRecordController.updatePut.bind(this.healthRecordController))
            .patch(this.healthRecordController.updatePatch.bind(this.healthRecordController))
            .delete(this.healthRecordController.deletePhysical.bind(this.healthRecordController));
        app
            .route("/api/fichas-sanitarias/:id/deactivate")
            .patch(this.healthRecordController.deleteLogical.bind(this.healthRecordController));
    }
}
exports.HealthRecordRoutes = HealthRecordRoutes;
//# sourceMappingURL=health-record.routes.js.map