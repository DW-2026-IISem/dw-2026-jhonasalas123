import { Application } from "express";
import { PaymentController } from "./payment.controller";

export class PaymentRoutes {
  private controller: PaymentController = new PaymentController();

  public routes(app: Application): void {
    app.get(
      "/api/pagos",
      this.controller.getAll.bind(this.controller)
    );

    app.get(
      "/api/pagos/:id",
      this.controller.getOne.bind(this.controller)
    );

    app.post(
      "/api/pagos",
      this.controller.create.bind(this.controller)
    );

    app.put(
      "/api/pagos/:id",
      this.controller.updatePut.bind(this.controller)
    );

    app.patch(
      "/api/pagos/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    app.delete(
      "/api/pagos/:id",
      this.controller.deletePhysical.bind(this.controller)
    );
  }
}
