import { Application } from "express";
import { RefreshTokensController } from "./refresh-tokens.controller";
import { jwtOnly } from "../access";

/**
 * Rutas de RefreshTokens.
 *
 * Modalidad JWT sin RBAC.
 * Solo permiten operar sobre las sesiones del usuario autenticado.
 */
export class RefreshTokensRoutes {
  public refreshTokensController: RefreshTokensController =
    new RefreshTokensController();

  public routes(app: Application): void {
    // Listar sesiones propias
    app
      .route("/api/sesiones")
      .get(
        ...jwtOnly,
        this.refreshTokensController.getAll.bind(
          this.refreshTokensController
        )
      );

    // Revocar todas las sesiones
    app
      .route("/api/sesiones/deactivate-all")
      .patch(
        ...jwtOnly,
        this.refreshTokensController.revokeAll.bind(
          this.refreshTokensController
        )
      );

    // Consultar una sesión propia
    app
      .route("/api/sesiones/:id")
      .get(
        ...jwtOnly,
        this.refreshTokensController.getOne.bind(
          this.refreshTokensController
        )
      );

    // Revocar una sesión concreta
    app
      .route("/api/sesiones/:id/deactivate")
      .patch(
        ...jwtOnly,
        this.refreshTokensController.revokeOne.bind(
          this.refreshTokensController
        )
      );

    // Purga de sesiones propias
    app
      .route("/api/sesiones")
      .delete(
        ...jwtOnly,
        this.refreshTokensController.purge.bind(
          this.refreshTokensController
        )
      );
  }
}
