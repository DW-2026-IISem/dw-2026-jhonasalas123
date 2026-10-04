import { Application } from "express";
import { ServiceAppointmentController } from "./service-appointment.controller";

export class ServiceAppointmentRoutes {
  private controller: ServiceAppointmentController =
    new ServiceAppointmentController();

  public routes(app: Application): void {

    // GET /api/citas-servicio
    app.get(
      "/api/citas-servicio",
      this.controller.getAll.bind(this.controller)
    );

    // GET /api/citas-servicio/:id
    app.get(
      "/api/citas-servicio/:id",
      this.controller.getOne.bind(this.controller)
    );

    // POST /api/citas-servicio
    app.post(
      "/api/citas-servicio",
      this.controller.create.bind(this.controller)
    );

    // PUT /api/citas-servicio/:id
    app.put(
      "/api/citas-servicio/:id",
      this.controller.updatePut.bind(this.controller)
    );

    // PATCH /api/citas-servicio/:id
    app.patch(
      "/api/citas-servicio/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    // DELETE físico
    app.delete(
      "/api/citas-servicio/:id",
      this.controller.deletePhysical.bind(this.controller)
    );

    // DELETE lógico
    app.delete(
      "/api/citas-servicio/:id/deactivate",
      this.controller.deleteLogical.bind(this.controller)
    );
  }
}
