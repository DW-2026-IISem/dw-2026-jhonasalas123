import { Application } from "express";
import { ResourceRolesController } from "./resource-roles.controller";
import { jwtRbac } from "../access";

/**
 * Rutas del feature ResourceRoles — modalidad 3 (JWT + RBAC).
 */
export class ResourceRolesRoutes {
  public resourceRolesController: ResourceRolesController =
    new ResourceRolesController();

  public routes(app: Application): void {
    // getAll
    app
      .route("/api/concesiones-rol")
      .get(
        ...jwtRbac,
        this.resourceRolesController.getAll.bind(
          this.resourceRolesController
        )
      );

    // getOne
    app
      .route("/api/concesiones-rol/:id")
      .get(
        ...jwtRbac,
        this.resourceRolesController.getOne.bind(
          this.resourceRolesController
        )
      );

    // conceder recurso a rol
    app
      .route("/api/concesiones-rol")
      .post(
        ...jwtRbac,
        this.resourceRolesController.grant.bind(
          this.resourceRolesController
        )
      );

    // retirar permiso
    app
      .route("/api/concesiones-rol/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.resourceRolesController.deactivate.bind(
          this.resourceRolesController
        )
      );

    // reactivar permiso
    app
      .route("/api/concesiones-rol/:id/reactivate")
      .patch(
        ...jwtRbac,
        this.resourceRolesController.reactivate.bind(
          this.resourceRolesController
        )
      );
  }
}
