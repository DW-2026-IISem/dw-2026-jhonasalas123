"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const pet_routes_1 = require("../features/business/pet/pet.routes");
const health_record_routes_1 = require("../features/business/health-record/health-record.routes");
const pet_service_routes_1 = require("../features/business/pet-service/pet-service.routes");
class Routes {
    constructor() {
        this.petRoutes = new pet_routes_1.PetRoutes();
        this.healthRecordRoutes = new health_record_routes_1.HealthRecordRoutes();
        this.petServiceRoutes = new pet_service_routes_1.PetServiceRoutes();
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map