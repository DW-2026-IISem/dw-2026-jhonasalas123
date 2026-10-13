import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { ProductController } from "./product.controller";

export class ProductRoutes {
  private controller: ProductController = new ProductController();

  public routes(app: Application): void {
    app
      .route("/api/productos")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/productos/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );

    app
      .route("/api/productos/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.controller.deleteLogical.bind(this.controller)
      );
  }
}
