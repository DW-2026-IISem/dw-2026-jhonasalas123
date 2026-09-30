import { Application } from "express";
import { PetController } from "./pet.controller";

export class PetRoutes {
  public petController: PetController = new PetController();

  public routes(app: Application): void {
    // ================== RUTAS SIN AUTENTICACIÓN / SIN MIDDLEWARE JWT ==================
    // (rellenar en ISS-03-B…E)
  }
}
