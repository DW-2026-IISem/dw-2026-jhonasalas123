import { Application } from "express";
import { HealthRecordController } from "./health-record.controller";

export class HealthRecordRoutes {
  public healthRecordController: HealthRecordController =
    new HealthRecordController();

  public routes(app: Application): void {
    app
      .route("/api/fichas-sanitarias")
      .get(
        this.healthRecordController.getAll.bind(this.healthRecordController)
      )
      .post(
        this.healthRecordController.create.bind(this.healthRecordController)
      );

    app
      .route("/api/fichas-sanitarias/:id")
      .get(
        this.healthRecordController.getOne.bind(this.healthRecordController)
      )
      .put(
        this.healthRecordController.updatePut.bind(this.healthRecordController)
      )
      .patch(
        this.healthRecordController.updatePatch.bind(this.healthRecordController)
      )
      .delete(
        this.healthRecordController.deletePhysical.bind(
          this.healthRecordController
        )
      );

    app
      .route("/api/fichas-sanitarias/:id/deactivate")
      .patch(
        this.healthRecordController.deleteLogical.bind(
          this.healthRecordController
        )
      );
  }
}
