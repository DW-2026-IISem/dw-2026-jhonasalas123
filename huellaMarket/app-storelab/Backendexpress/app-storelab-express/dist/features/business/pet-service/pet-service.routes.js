"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetServiceRoutes = void 0;
const access_1 = require("../../auth/access");
const pet_service_controller_1 = require("./pet-service.controller");
class PetServiceRoutes {
    constructor() {
        this.petServiceController = new pet_service_controller_1.PetServiceController();
    }
    routes(app) {
        app
            .route("/api/servicios-mascota")
            .get(...access_1.jwtRbac, this.petServiceController.getAll.bind(this.petServiceController))
            .post(...access_1.jwtRbac, this.petServiceController.create.bind(this.petServiceController));
        app
            .route("/api/servicios-mascota/:id")
            .get(...access_1.jwtRbac, this.petServiceController.getOne.bind(this.petServiceController))
            .put(...access_1.jwtRbac, this.petServiceController.updatePut.bind(this.petServiceController))
            .patch(...access_1.jwtRbac, this.petServiceController.updatePatch.bind(this.petServiceController))
            .delete(...access_1.jwtRbac, this.petServiceController.deletePhysical.bind(this.petServiceController));
        app
            .route("/api/servicios-mascota/:id/deactivate")
            .patch(...access_1.jwtRbac, this.petServiceController.deleteLogical.bind(this.petServiceController));
    }
}
exports.PetServiceRoutes = PetServiceRoutes;
//# sourceMappingURL=pet-service.routes.js.map