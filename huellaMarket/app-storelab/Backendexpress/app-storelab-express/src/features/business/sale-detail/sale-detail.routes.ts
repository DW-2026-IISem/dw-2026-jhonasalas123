import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { SaleDetailController } from "./sale-detail.controller";

export class SaleDetailRoutes {
  private controller: SaleDetailController = new SaleDetailController();

  public routes(app: Application): void {
    app
      .route("/api/venta-detalles")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/venta-detalles/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );
  }
}
