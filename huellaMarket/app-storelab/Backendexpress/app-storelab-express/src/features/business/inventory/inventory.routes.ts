import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { InventoryController } from "./inventory.controller";

export class InventoryRoutes {
  private controller: InventoryController = new InventoryController();

  public routes(app: Application): void {
    app
      .route("/api/inventarios")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/inventarios/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );
  }
}
