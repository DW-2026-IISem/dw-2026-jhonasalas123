import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { ClientController } from "./client.controller";

export class ClientRoutes {
  public clientController: ClientController = new ClientController();

  public routes(app: Application): void {
    app
      .route("/api/clientes")
      .get(...jwtRbac, this.clientController.getAll.bind(this.clientController))
      .post(...jwtRbac, this.clientController.create.bind(this.clientController));

    app
      .route("/api/clientes/:id")
      .get(...jwtRbac, this.clientController.getOne.bind(this.clientController))
      .put(...jwtRbac, this.clientController.updatePut.bind(this.clientController))
      .patch(...jwtRbac, this.clientController.updatePatch.bind(this.clientController))
      .delete(
        ...jwtRbac,
        this.clientController.deletePhysical.bind(this.clientController)
      );

    app
      .route("/api/clientes/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.clientController.deleteLogical.bind(this.clientController)
      );
  }
}
