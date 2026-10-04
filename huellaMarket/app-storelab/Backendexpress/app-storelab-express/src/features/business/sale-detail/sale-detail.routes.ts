import { Application } from "express";
import { SaleDetailController } from "./sale-detail.controller";

export class SaleDetailRoutes {
  private controller: SaleDetailController = new SaleDetailController();

  public routes(app: Application): void {
    app.get(
      "/api/venta-detalles",
      this.controller.getAll.bind(this.controller)
    );

    app.get(
      "/api/venta-detalles/:id",
      this.controller.getOne.bind(this.controller)
    );

    app.post(
      "/api/venta-detalles",
      this.controller.create.bind(this.controller)
    );

    app.put(
      "/api/venta-detalles/:id",
      this.controller.updatePut.bind(this.controller)
    );

    app.patch(
      "/api/venta-detalles/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    app.delete(
      "/api/venta-detalles/:id",
      this.controller.deletePhysical.bind(this.controller)
    );
  }
}
