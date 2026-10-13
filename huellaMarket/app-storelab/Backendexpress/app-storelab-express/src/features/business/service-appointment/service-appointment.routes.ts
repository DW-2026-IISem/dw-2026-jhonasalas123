import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { ServiceAppointmentController } from "./service-appointment.controller";

export class ServiceAppointmentRoutes {
  private controller: ServiceAppointmentController =
    new ServiceAppointmentController();

  public routes(app: Application): void {
    app
      .route("/api/citas-servicio")
      .get(...jwtRbac, this.controller.getAll.bind(this.controller))
      .post(...jwtRbac, this.controller.create.bind(this.controller));

    app
      .route("/api/citas-servicio/:id")
      .get(...jwtRbac, this.controller.getOne.bind(this.controller))
      .put(...jwtRbac, this.controller.updatePut.bind(this.controller))
      .patch(...jwtRbac, this.controller.updatePatch.bind(this.controller))
      .delete(
        ...jwtRbac,
        this.controller.deletePhysical.bind(this.controller)
      );

    app
      .route("/api/citas-servicio/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.controller.deleteLogical.bind(this.controller)
      );
  }
}
