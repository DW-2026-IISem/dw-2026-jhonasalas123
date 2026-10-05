import { Application } from "express";
import { SessionController } from "./session.controller";
import { authenticate } from "../access";

/**
 * Rutas del feature Session.
 *
 * OPEN:
 * - login
 * - refresh
 * - logout
 *
 * JWT:
 * - perfil
 * - permisos
 */
export class SessionRoutes {
  public sessionController: SessionController =
    new SessionController();

  public routes(app: Application): void {
    // LOGIN — OPEN
    app
      .route("/api/sesion/login")
      .post(
        this.sessionController.login.bind(
          this.sessionController
        )
      );

    // REFRESH — OPEN + refresh token
    app
      .route("/api/sesion/refresh")
      .post(
        this.sessionController.refresh.bind(
          this.sessionController
        )
      );

    // LOGOUT — OPEN + refresh token
    app
      .route("/api/sesion/logout")
      .post(
        this.sessionController.logout.bind(
          this.sessionController
        )
      );

    // PERFIL — JWT
    app
      .route("/api/sesion/perfil")
      .get(
        authenticate,
        this.sessionController.profile.bind(
          this.sessionController
        )
      );

    // PERMISOS — JWT
    app
      .route("/api/permisos")
      .get(
        authenticate,
        this.sessionController.myPermissions.bind(
          this.sessionController
        )
      );
  }
}
