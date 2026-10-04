"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const pet_routes_1 = require("../features/business/pet/pet.routes");
const health_record_routes_1 = require("../features/business/health-record/health-record.routes");
const pet_service_routes_1 = require("../features/business/pet-service/pet-service.routes");
const service_appointment_routes_1 = require("../features/business/service-appointment/service-appointment.routes");
const product_routes_1 = require("../features/business/product/product.routes");
const provider_routes_1 = require("../features/business/provider/provider.routes");
class Routes {
    constructor() {
        this.petRoutes = new pet_routes_1.PetRoutes();
        this.healthRecordRoutes = new health_record_routes_1.HealthRecordRoutes();
        this.petServiceRoutes = new pet_service_routes_1.PetServiceRoutes();
        this.serviceAppointmentRoutes = new service_appointment_routes_1.ServiceAppointmentRoutes();
        this.productRoutes = new product_routes_1.ProductRoutes();
        this.providerRoutes = new provider_routes_1.ProviderRoutes();
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map