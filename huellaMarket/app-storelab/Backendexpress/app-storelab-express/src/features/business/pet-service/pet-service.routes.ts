import { Application } from "express";
import { PetServiceController } from "./pet-service.controller";

export class PetServiceRoutes {
  public petServiceController: PetServiceController =
    new PetServiceController();

  public routes(app: Application): void {
    // GET — listar servicios de mascota
    app.get(
      "/api/servicios-mascota",
      this.petServiceController.getAll.bind(this.petServiceController)
    );

    // GET — obtener servicio de mascota por ID
    app.get(
      "/api/servicios-mascota/:id",
      this.petServiceController.getOne.bind(this.petServiceController)
    );

    // POST — crear servicio de mascota
    app.post(
      "/api/servicios-mascota",
      this.petServiceController.create.bind(this.petServiceController)
    );

    // PUT — actualizar servicio de mascota
    app.put(
      "/api/servicios-mascota/:id",
      this.petServiceController.updatePut.bind(this.petServiceController)
    );

    // PATCH — actualizar parcialmente
    app.patch(
      "/api/servicios-mascota/:id",
      this.petServiceController.updatePatch.bind(this.petServiceController)
    );

    // DELETE físico
    app.delete(
      "/api/servicios-mascota/:id",
      this.petServiceController.deletePhysical.bind(
        this.petServiceController
      )
    );

    // DELETE lógico
    app.patch(
      "/api/servicios-mascota/:id/deactivate",
      this.petServiceController.deleteLogical.bind(
        this.petServiceController
      )
    );
  }
}
