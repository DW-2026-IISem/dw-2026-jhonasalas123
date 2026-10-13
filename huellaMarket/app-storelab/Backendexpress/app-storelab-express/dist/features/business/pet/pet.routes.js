"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRoutes = void 0;
const access_1 = require("../../auth/access");
const pet_controller_1 = require("./pet.controller");
class PetRoutes {
    constructor() {
        this.petController = new pet_controller_1.PetController();
    }
    routes(app) {
        app
            .route("/api/mascotas")
            .get(...access_1.jwtRbac, this.petController.getAll.bind(this.petController))
            .post(...access_1.jwtRbac, this.petController.create.bind(this.petController));
        app
            .route("/api/mascotas/:id")
            .get(...access_1.jwtRbac, this.petController.getOne.bind(this.petController))
            .put(...access_1.jwtRbac, this.petController.updatePut.bind(this.petController))
            .patch(...access_1.jwtRbac, this.petController.updatePatch.bind(this.petController))
            .delete(...access_1.jwtRbac, this.petController.deletePhysical.bind(this.petController));
        app
            .route("/api/mascotas/:id/deactivate")
            .patch(...access_1.jwtRbac, this.petController.deleteLogical.bind(this.petController));
    }
}
exports.PetRoutes = PetRoutes;
//# sourceMappingURL=pet.routes.js.map