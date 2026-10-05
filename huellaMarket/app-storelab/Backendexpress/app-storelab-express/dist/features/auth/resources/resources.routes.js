"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRoutes = void 0;
const access_1 = require("../access");
const resources_controller_1 = require("./resources.controller");
class ResourceRoutes {
    constructor() {
        this.controller = new resources_controller_1.ResourcesController();
    }
    routes(router) {
        router.get("/api/recursos", access_1.authenticate, access_1.authorize, this.controller.getAll.bind(this.controller));
        router.get("/api/recursos/:id", access_1.authenticate, access_1.authorize, this.controller.getOne.bind(this.controller));
        router.post("/api/recursos", access_1.authenticate, access_1.authorize, this.controller.create.bind(this.controller));
        router.put("/api/recursos/:id", access_1.authenticate, access_1.authorize, this.controller.updatePut.bind(this.controller));
        router.patch("/api/recursos/:id", access_1.authenticate, access_1.authorize, this.controller.updatePatch.bind(this.controller));
        router.delete("/api/recursos/:id", access_1.authenticate, access_1.authorize, this.controller.delete.bind(this.controller));
        router.patch("/api/recursos/:id/deactivate", access_1.authenticate, access_1.authorize, this.controller.deactivate.bind(this.controller));
    }
}
exports.ResourceRoutes = ResourceRoutes;
//# sourceMappingURL=resources.routes.js.map