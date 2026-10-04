import { Request, Response } from "express";
import {
  ServiceAppointment,
  ServiceAppointmentI,
} from "./service-appointment.model";

export class ServiceAppointmentController {

  // GET /api/citas-servicio
  public async getAll(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }

  // GET /api/citas-servicio/:id
  public async getOne(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }

  // POST /api/citas-servicio
  public async create(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }

  // PUT /api/citas-servicio/:id
  public async updatePut(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }

  // PATCH /api/citas-servicio/:id
  public async updatePatch(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }

  // DELETE físico /api/citas-servicio/:id
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }

  // DELETE lógico /api/citas-servicio/:id/deactivate
  public async deleteLogical(req: Request, res: Response): Promise<void> {
    // TODO: implementar
  }
}
