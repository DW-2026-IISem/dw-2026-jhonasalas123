import { Application } from "express";
import { SaleController } from "./sale.controller";

export class SaleRoutes {
  private controller: SaleController = new SaleController();

  public routes(app: Application): void {

    // ISS-03-B — READ
    app.get(
      "/api/ventas",
      this.controller.getAll.bind(this.controller)
    );

    app.get(
      "/api/ventas/:id",
      this.controller.getOne.bind(this.controller)
    );

    // ISS-03-C — CREATE
    app.post(
      "/api/ventas",
      this.controller.create.bind(this.controller)
    );

    // ISS-03-D — UPDATE
    app.put(
      "/api/ventas/:id",
      this.controller.updatePut.bind(this.controller)
    );

    app.patch(
      "/api/ventas/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    // ISS-03-E — DELETE
    app.delete(
      "/api/ventas/:id",
      this.controller.deletePhysical.bind(this.controller)
    );
  }
}
