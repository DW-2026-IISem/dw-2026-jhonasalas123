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
        // (rellenar en ISS-03-B…E)
    }
}
exports.PetRoutes = PetRoutes;
//# sourceMappingURL=pet.routes.js.map