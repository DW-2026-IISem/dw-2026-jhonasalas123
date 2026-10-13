import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { SaleController } from "./sale.controller";

export class SaleRoutes {
  private controller: SaleController = new SaleController();

  public routes(app: Application): void {
    app
      .route("/api/ventas")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/ventas/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );
  }
}
