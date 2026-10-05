"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRolesRoutes = void 0;
const resource_roles_controller_1 = require("./resource-roles.controller");
const access_1 = require("../access");
/**
 * Rutas del feature ResourceRoles — modalidad 3 (JWT + RBAC).
 */
class ResourceRolesRoutes {
    constructor() {
        this.resourceRolesController = new resource_roles_controller_1.ResourceRolesController();
    }
    routes(app) {
        // getAll
        app
            .route("/api/concesiones-rol")
            .get(access_1.authenticate, access_1.authorize, this.resourceRolesController.getAll.bind(this.resourceRolesController));
        // getOne
        app
            .route("/api/concesiones-rol/:id")
            .get(access_1.authenticate, access_1.authorize, this.resourceRolesController.getOne.bind(this.resourceRolesController));
        // conceder recurso a rol
        app
            .route("/api/concesiones-rol")
            .post(access_1.authenticate, access_1.authorize, this.resourceRolesController.grant.bind(this.resourceRolesController));
        // retirar permiso
        app
            .route("/api/concesiones-rol/:id/deactivate")
            .patch(access_1.authenticate, access_1.authorize, this.resourceRolesController.deactivate.bind(this.resourceRolesController));
        // reactivar permiso
        app
            .route("/api/concesiones-rol/:id/reactivate")
            .patch(access_1.authenticate, access_1.authorize, this.resourceRolesController.reactivate.bind(this.resourceRolesController));
    }
}
exports.ResourceRolesRoutes = ResourceRolesRoutes;
//# sourceMappingURL=resource-roles.routes.js.map