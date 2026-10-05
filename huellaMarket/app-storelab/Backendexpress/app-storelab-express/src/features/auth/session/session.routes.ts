import { Application } from "express";
import { SessionController } from "./session.controller";

export class SessionRoutes {
  private readonly controller = new SessionController();

  public routes(app: Application): void {
    app.post("/api/auth/login", this.controller.login);
  }
}
