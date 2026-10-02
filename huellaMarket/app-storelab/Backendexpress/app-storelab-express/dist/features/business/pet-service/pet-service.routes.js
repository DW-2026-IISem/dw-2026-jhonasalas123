"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetServiceRoutes = void 0;
const pet_service_controller_1 = require("./pet-service.controller");
class PetServiceRoutes {
    constructor() {
        this.petServiceController = new pet_service_controller_1.PetServiceController();
    }
    routes(app) {
        // GET — listar servicios de mascota
        app.get("/api/servicios-mascota", this.petServiceController.getAll.bind(this.petServiceController));
        // GET — obtener servicio de mascota por ID
        app.get("/api/servicios-mascota/:id", this.petServiceController.getOne.bind(this.petServiceController));
        // POST — crear servicio de mascota
        app.post("/api/servicios-mascota", this.petServiceController.create.bind(this.petServiceController));
        // PUT — actualizar servicio de mascota
        app.put("/api/servicios-mascota/:id", this.petServiceController.updatePut.bind(this.petServiceController));
        // PATCH — actualizar parcialmente
        app.patch("/api/servicios-mascota/:id", this.petServiceController.updatePatch.bind(this.petServiceController));
        // DELETE físico
        app.delete("/api/servicios-mascota/:id", this.petServiceController.deletePhysical.bind(this.petServiceController));
        // DELETE lógico
        app.patch("/api/servicios-mascota/:id/deactivate", this.petServiceController.deleteLogical.bind(this.petServiceController));
    }
}
exports.PetServiceRoutes = PetServiceRoutes;
//# sourceMappingURL=pet-service.routes.js.map