import { Application } from "express";
import { HealthRecordController } from "./health-record.controller";

export class HealthRecordRoutes {
  public healthRecordController: HealthRecordController =
    new HealthRecordController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN / SIN MIDDLEWARE JWT ==================

    // getAll
    app
      .route("/api/fichas-sanitarias")
      .get(
        this.healthRecordController.getAll.bind(
          this.healthRecordController
        )
      );

    // getOne
    app
      .route("/api/fichas-sanitarias/:id")
      .get(
        this.healthRecordController.getOne.bind(
          this.healthRecordController
        )
      );

    // create
    app
      .route("/api/fichas-sanitarias")
      .post(
        this.healthRecordController.create.bind(
          this.healthRecordController
        )
      );

    // update (PUT / PATCH)
    app
      .route("/api/fichas-sanitarias/:id")
      .put(
        this.healthRecordController.updatePut.bind(
          this.healthRecordController
        )
      )
      .patch(
        this.healthRecordController.updatePatch.bind(
          this.healthRecordController
        )
      );

    // delete físico
    app
      .route("/api/fichas-sanitarias/:id")
      .delete(
        this.healthRecordController.deletePhysical.bind(
          this.healthRecordController
        )
      );

    // delete lógico
    app
      .route("/api/fichas-sanitarias/:id/deactivate")
      .patch(
        this.healthRecordController.deleteLogical.bind(
          this.healthRecordController
        )
      );
  }
}
