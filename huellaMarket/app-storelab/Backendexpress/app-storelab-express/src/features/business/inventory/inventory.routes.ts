import { Application } from "express";
import { InventoryController } from "./inventory.controller";

export class InventoryRoutes {
  private controller: InventoryController = new InventoryController();

  public routes(app: Application): void {

    // ISS-03-B — READ
    app.get(
      "/api/inventarios",
      this.controller.getAll.bind(this.controller)
    );

    app.get(
      "/api/inventarios/:id",
      this.controller.getOne.bind(this.controller)
    );

    // ISS-03-C — CREATE
    app.post(
      "/api/inventarios",
      this.controller.create.bind(this.controller)
    );

    // ISS-03-D — UPDATE
    app.put(
      "/api/inventarios/:id",
      this.controller.updatePut.bind(this.controller)
    );

    app.patch(
      "/api/inventarios/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    // ISS-03-E — DELETE físico
    app.delete(
      "/api/inventarios/:id",
      this.controller.deletePhysical.bind(this.controller)
    );
  }
}
