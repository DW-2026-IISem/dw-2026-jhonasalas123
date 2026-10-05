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
        // ================== RUTAS SIN AUTENTICACIÓN / SIN MIDDLEWARE JWT ==================
        // getAll
        app
            .route("/api/mascotas")
            .get(access_1.authenticate, access_1.authorize, this.petController.getAll.bind(this.petController));
        // getOne
        app
            .route("/api/mascotas/:id")
            .get(access_1.authenticate, access_1.authorize, this.petController.getOne.bind(this.petController));
        // ================== CREATE ==================
        app
            .route("/api/mascotas")
            .post(access_1.authenticate, access_1.authorize, this.petController.create.bind(this.petController));
        // ================== UPDATE ==================
        // (rellenar en ISS-03-D)
        // ================== DELETE ==================
        // (rellenar en ISS-03-E)
    }
}
exports.PetRoutes = PetRoutes;
//# sourceMappingURL=pet.routes.js.map