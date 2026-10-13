import { Application } from "express";
import { RolesController } from "./roles.controller";
import { jwtRbac } from "../access";

/** Rutas del feature Roles — **modalidad 3 (JWT + RBAC)** en todas las operaciones. */
export class RolesRoutes {
  public rolesController: RolesController = new RolesController();

  public routes(app: Application): void {
    // getAll
    app
      .route("/api/roles")
      .get(...jwtRbac, this.rolesController.getAll.bind(this.rolesController));

    // getOne
    app
      .route("/api/roles/:id")
      .get(...jwtRbac, this.rolesController.getOne.bind(this.rolesController));

    // create
    app
      .route("/api/roles")
      .post(...jwtRbac, this.rolesController.create.bind(this.rolesController));

    // update (PUT / PATCH)
    app
      .route("/api/roles/:id")
      .put(...jwtRbac, this.rolesController.updatePut.bind(this.rolesController))
      .patch(...jwtRbac, this.rolesController.updatePatch.bind(this.rolesController));

    // delete físico
    app
      .route("/api/roles/:id")
      .delete(
        ...jwtRbac,
        this.rolesController.deletePhysical.bind(this.rolesController)
      );

    // delete lógico
    app
      .route("/api/roles/:id/deactivate")
      .patch(...jwtRbac, this.rolesController.deleteLogical.bind(this.rolesController));
  }
}
