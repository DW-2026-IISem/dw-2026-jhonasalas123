import { authenticate, authorize } from "../../auth/access";
import { Application } from "express";
import { ProductController } from "./product.controller";

export class ProductRoutes {
  private controller: ProductController = new ProductController();

  public routes(app: Application): void {

    // ISS-03-B — READ
    app.get(
      "/api/productos",
      this.controller.getAll.bind(this.controller)
    );

    app.get(
      "/api/productos/:id",
      this.controller.getOne.bind(this.controller)
    );

    // ISS-03-C — CREATE
    app.post(
      "/api/productos",
      this.controller.create.bind(this.controller)
    );

    // ISS-03-D — UPDATE
    app.put(
      "/api/productos/:id",
      this.controller.updatePut.bind(this.controller)
    );

    app.patch(
      "/api/productos/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    // ISS-03-E — DELETE
    app.delete(
      "/api/productos/:id",
      this.controller.deletePhysical.bind(this.controller)
    );

    app.delete(
      "/api/productos/:id/deactivate",
      this.controller.deleteLogical.bind(this.controller)
    );
  }
}
