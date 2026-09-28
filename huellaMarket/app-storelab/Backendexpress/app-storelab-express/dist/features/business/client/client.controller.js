"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class ClientController {
}
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map