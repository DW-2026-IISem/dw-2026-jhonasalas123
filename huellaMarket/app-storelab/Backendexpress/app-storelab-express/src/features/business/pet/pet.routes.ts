import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { PetController } from "./pet.controller";

export class PetRoutes {
  public petController: PetController = new PetController();

  public routes(app: Application): void {
    app
      .route("/api/mascotas")
      .get(...jwtRbac, this.petController.getAll.bind(this.petController))
      .post(...jwtRbac, this.petController.create.bind(this.petController));

    app
      .route("/api/mascotas/:id")
      .get(...jwtRbac, this.petController.getOne.bind(this.petController))
      .put(...jwtRbac, this.petController.updatePut.bind(this.petController))
      .patch(...jwtRbac, this.petController.updatePatch.bind(this.petController))
      .delete(
        ...jwtRbac,
        this.petController.deletePhysical.bind(this.petController)
      );

    app
      .route("/api/mascotas/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.petController.deleteLogical.bind(this.petController)
      );
  }
}
