import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { PetServiceController } from "./pet-service.controller";

export class PetServiceRoutes {
  public petServiceController: PetServiceController =
    new PetServiceController();

  public routes(app: Application): void {
    app
      .route("/api/servicios-mascota")
      .get(
        ...jwtRbac,
        this.petServiceController.getAll.bind(this.petServiceController)
      )
      .post(
        ...jwtRbac,
        this.petServiceController.create.bind(this.petServiceController)
      );

    app
      .route("/api/servicios-mascota/:id")
      .get(
        ...jwtRbac,
        this.petServiceController.getOne.bind(this.petServiceController)
      )
      .put(
        ...jwtRbac,
        this.petServiceController.updatePut.bind(this.petServiceController)
      )
      .patch(
        ...jwtRbac,
        this.petServiceController.updatePatch.bind(this.petServiceController)
      )
      .delete(
        ...jwtRbac,
        this.petServiceController.deletePhysical.bind(this.petServiceController)
      );

    app
      .route("/api/servicios-mascota/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.petServiceController.deleteLogical.bind(this.petServiceController)
      );
  }
}
