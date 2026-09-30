"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRoutes = void 0;
const pet_controller_1 = require("./pet.controller");
class PetRoutes {
    constructor() {
        this.petController = new pet_controller_1.PetController();
    }
    routes(app) {
        // ================== RUTAS SIN AUTENTICACIÓN / SIN MIDDLEWARE JWT ==================
        // getAll
        app
            .route("/api/mascotas")
            .get(this.petController.getAll.bind(this.petController));
        // getOne
        app
            .route("/api/mascotas/:id")
            .get(this.petController.getOne.bind(this.petController));
        // ================== CREATE ==================
        app
            .route("/api/mascotas")
            .post(this.petController.create.bind(this.petController));
        // ================== UPDATE ==================
        // (rellenar en ISS-03-D)
        // ================== DELETE ==================
        // (rellenar en ISS-03-E)
    }
}
exports.PetRoutes = PetRoutes;
//# sourceMappingURL=pet.routes.js.map