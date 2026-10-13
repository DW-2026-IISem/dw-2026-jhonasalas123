import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { ProviderController } from "./provider.controller";

export class ProviderRoutes {
  private controller: ProviderController = new ProviderController();

  public routes(app: Application): void {
    app
      .route("/api/proveedores")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/proveedores/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );

    app
      .route("/api/proveedores/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.controller.deleteLogical.bind(this.controller)
      );
  }
}
