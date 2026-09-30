"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const pet_routes_1 = require("../features/business/pet/pet.routes");
class Routes {
    constructor() {
        this.petRoutes = new pet_routes_1.PetRoutes();
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map