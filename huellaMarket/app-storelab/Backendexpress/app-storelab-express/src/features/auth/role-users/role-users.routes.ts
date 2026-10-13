import { Application } from "express";
import { RoleUsersController } from "./role-users.controller";
import { jwtRbac } from "../access";

/**
 * Rutas del feature RoleUsers — modalidad 3 (JWT + RBAC).
 *
 * Permite asignar un rol a un usuario y administrar su estado.
 */
export class RoleUsersRoutes {
  public roleUsersController: RoleUsersController =
    new RoleUsersController();

  public routes(app: Application): void {
    app
      .route("/api/asignaciones-rol")
      .get(
        ...jwtRbac,
        this.roleUsersController.getAll.bind(
          this.roleUsersController
        )
      );

    app
      .route("/api/asignaciones-rol/:id")
      .get(
        ...jwtRbac,
        this.roleUsersController.getOne.bind(
          this.roleUsersController
        )
      );

    app
      .route("/api/asignaciones-rol")
      .post(
        ...jwtRbac,
        this.roleUsersController.assign.bind(
          this.roleUsersController
        )
      );

    app
      .route("/api/asignaciones-rol/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.roleUsersController.deactivate.bind(
          this.roleUsersController
        )
      );

    app
      .route("/api/asignaciones-rol/:id/reactivate")
      .patch(
        ...jwtRbac,
        this.roleUsersController.reactivate.bind(
          this.roleUsersController
        )
      );
  }
}
