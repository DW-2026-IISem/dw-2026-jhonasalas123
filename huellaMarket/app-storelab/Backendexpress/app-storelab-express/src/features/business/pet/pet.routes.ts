import { authenticate, authorize } from "../../auth/access";
import { Application } from "express";
import { PetController } from "./pet.controller";

export class PetRoutes {
  public petController: PetController = new PetController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN / SIN MIDDLEWARE JWT ==================

    // getAll
    app
      .route("/api/mascotas")
      .get(authenticate, authorize, this.petController.getAll.bind(this.petController));

    // getOne
    app
      .route("/api/mascotas/:id")
      .get(authenticate, authorize, this.petController.getOne.bind(this.petController));

    // ================== CREATE ==================
   
app
  .route("/api/mascotas")
  .post(authenticate, authorize, this.petController.create.bind(this.petController));

    // ================== UPDATE ==================
    // (rellenar en ISS-03-D)

    // ================== DELETE ==================
    // (rellenar en ISS-03-E)
  }
}
