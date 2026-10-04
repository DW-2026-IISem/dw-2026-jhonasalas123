import { Router } from "express";
import { ServiceAppointmentController } from "./service-appointment.controller";

export class ServiceAppointmentRoutes {
  public router: Router;
  private controller: ServiceAppointmentController;

  constructor() {
    this.router = Router();
    this.controller = new ServiceAppointmentController();
  }

  routes(): Router {
    this.router.get(
      "/",
      this.controller.getAll.bind(this.controller)
    );

    this.router.get(
      "/:id",
      this.controller.getOne.bind(this.controller)
    );

    this.router.post(
      "/",
      this.controller.create.bind(this.controller)
    );

    this.router.put(
      "/:id",
      this.controller.updatePut.bind(this.controller)
    );

    this.router.patch(
      "/:id",
      this.controller.updatePatch.bind(this.controller)
    );

    this.router.delete(
      "/:id",
      this.controller.deletePhysical.bind(this.controller)
    );

    this.router.delete(
      "/:id/deactivate",
      this.controller.deleteLogical.bind(this.controller)
    );

    return this.router;
  }
}
