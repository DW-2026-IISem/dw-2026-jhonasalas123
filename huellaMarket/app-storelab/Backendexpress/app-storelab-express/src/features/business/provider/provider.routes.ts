import { Application } from "express";
import { ProviderController } from "./provider.controller";

export class ProviderRoutes {
  private controller: ProviderController = new ProviderController();

  public routes(app: Application): void {

    // ISS-03-B — GET ALL
    app.get(
      "/api/proveedores",
      this.controller.getAll.bind(this.controller)
    );

    // ISS-03-B — GET ONE
    app.get(
      "/api/proveedores/:id",
      this.controller.getOne.bind(this.controller)
    );

    // ISS-03-C — CREATE
    app.post(
      "/api/proveedores",
      this.controller.create.bind(this.controller)
    );

    // ISS-03-D — UPDATE PUT
    app.put(
      "/api/proveedores/:id",
      this.controller.updatePut.bind(this.controller)
    );

    // ISS-03-D — UPDATE PATCH
    app.patch(
      "/api/proveedores/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    // ISS-03-E — DELETE FÍSICO
    app.delete(
      "/api/proveedores/:id",
      this.controller.deletePhysical.bind(this.controller)
    );

    // ISS-03-E — DELETE LÓGICO
    app.delete(
      "/api/proveedores/:id/deactivate",
      this.controller.deleteLogical.bind(this.controller)
    );
  }
}
