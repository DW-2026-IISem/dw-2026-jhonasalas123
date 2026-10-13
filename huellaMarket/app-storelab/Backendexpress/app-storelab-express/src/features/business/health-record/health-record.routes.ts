import { Application } from "express";
import { jwtRbac } from "../../auth/access";
import { HealthRecordController } from "./health-record.controller";

export class HealthRecordRoutes {
  public healthRecordController: HealthRecordController =
    new HealthRecordController();

  public routes(app: Application): void {
    app
      .route("/api/fichas-sanitarias")
      .get(
        ...jwtRbac,
        this.healthRecordController.getAll.bind(this.healthRecordController)
      )
      .post(
        ...jwtRbac,
        this.healthRecordController.create.bind(this.healthRecordController)
      );

    app
      .route("/api/fichas-sanitarias/:id")
      .get(
        ...jwtRbac,
        this.healthRecordController.getOne.bind(this.healthRecordController)
      )
      .put(
        ...jwtRbac,
        this.healthRecordController.updatePut.bind(this.healthRecordController)
      )
      .patch(
        ...jwtRbac,
        this.healthRecordController.updatePatch.bind(this.healthRecordController)
      )
      .delete(
        ...jwtRbac,
        this.healthRecordController.deletePhysical.bind(
          this.healthRecordController
        )
      );

    app
      .route("/api/fichas-sanitarias/:id/deactivate")
      .patch(
        ...jwtRbac,
        this.healthRecordController.deleteLogical.bind(
          this.healthRecordController
        )
      );
  }
}
