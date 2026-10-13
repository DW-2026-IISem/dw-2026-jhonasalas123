import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { PaymentController } from "./payment.controller";

export class PaymentRoutes {
  private controller: PaymentController = new PaymentController();

  public routes(app: Application): void {
    app
      .route("/api/pagos")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/pagos/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );
  }
}
