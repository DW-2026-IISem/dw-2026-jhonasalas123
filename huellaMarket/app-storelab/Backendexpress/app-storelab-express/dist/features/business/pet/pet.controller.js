"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class PetController {
}
exports.PetController = PetController;
//# sourceMappingURL=pet.controller.js.map