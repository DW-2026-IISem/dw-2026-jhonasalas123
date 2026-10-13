import { Application } from "express";
import { UsersController } from "./users.controller";
import { jwtRbac } from "../access";

/**
 * Rutas del feature Users — **modalidad 3 (JWT + RBAC)** en todas las operaciones.
 *
 * La administración de identidades está ella misma protegida por la matriz de
 * permisos: no basta con estar autenticado, hay que tener la concesión concreta
 * (`GET /api/usuarios`, `POST /api/usuarios`, ...). El catálogo de recursos ya
 * incluye las 9 operaciones de este feature.
 */
export class UsersRoutes {
  public usersController: UsersController = new UsersController();

  public routes(app: Application): void {
    // getAll
    app
      .route("/api/usuarios")
      .get(...jwtRbac, this.usersController.getAll.bind(this.usersController));

    // getOne
    app
      .route("/api/usuarios/:id")
      .get(...jwtRbac, this.usersController.getOne.bind(this.usersController));

    // create
    app
      .route("/api/usuarios")
      .post(...jwtRbac, this.usersController.create.bind(this.usersController));

    // update (PUT / PATCH)
    app
      .route("/api/usuarios/:id")
      .put(...jwtRbac, this.usersController.updatePut.bind(this.usersController))
      .patch(...jwtRbac, this.usersController.updatePatch.bind(this.usersController));

    // delete físico
    app
      .route("/api/usuarios/:id")
      .delete(
        ...jwtRbac,
        this.usersController.deletePhysical.bind(this.usersController)
      );

    // delete lógico
    app
      .route("/api/usuarios/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.usersController.deleteLogical.bind(this.usersController)
      );

    // cambio de contraseña
    app
      .route("/api/usuarios/:id/password")
      .patch(
        ...jwtRbac,
        this.usersController.changePassword.bind(this.usersController)
      );

    // permisos efectivos del usuario
    app
      .route("/api/usuarios/:id/permisos")
      .get(
        ...jwtRbac,
        this.usersController.getEffectivePermissions.bind(this.usersController)
      );
  }
}
