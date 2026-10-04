import { Request, Response } from "express";
import {
  ServiceAppointment,
  ServiceAppointmentI,
} from "./service-appointment.model";

export class ServiceAppointmentController {

  // ISS-03-B — GET /api/citas-servicio
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const service_appointments = await ServiceAppointment.findAll({
        where: { isActive: true },
      });

      res.status(200).json({ service_appointments });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching service appointments",
        detail: String(error),
      });
    }
  }

  // ISS-03-B — GET /api/citas-servicio/:id
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const service_appointment =
        await ServiceAppointment.findByPk(id);

      if (!service_appointment) {
        res.status(404).json({
          error: "Service appointment not found",
        });
        return;
      }

      res.status(200).json({ service_appointment });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching service appointment",
        detail: String(error),
      });
    }
  }

  // ISS-03-C — POST /api/citas-servicio
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as ServiceAppointmentI;

      const service_appointment =
        await ServiceAppointment.create({
          nombre: body.nombre,
          descripcion: body.descripcion ?? null,
          isActive: body.isActive ?? true,
        });

      res.status(201).json({ service_appointment });
    } catch (error) {
      res.status(500).json({
        error: "Error creating service appointment",
        detail: String(error),
      });
    }
  }

  // ISS-03-D — PUT /api/citas-servicio/:id
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const service_appointment =
        await ServiceAppointment.findByPk(id);

      if (!service_appointment) {
        res.status(404).json({
          error: "Service appointment not found",
        });
        return;
      }

      const body = req.body as ServiceAppointmentI;

      await service_appointment.update({
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        isActive: body.isActive ?? true,
      });

      res.status(200).json({ service_appointment });
    } catch (error) {
      res.status(500).json({
        error: "Error updating service appointment",
        detail: String(error),
      });
    }
  }

  // ISS-03-D — PATCH /api/citas-servicio/:id
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const service_appointment =
        await ServiceAppointment.findByPk(id);

      if (!service_appointment) {
        res.status(404).json({
          error: "Service appointment not found",
        });
        return;
      }

      const body = req.body as Partial<ServiceAppointmentI>;

      await service_appointment.update(body);

      res.status(200).json({ service_appointment });
    } catch (error) {
      res.status(500).json({
        error: "Error patching service appointment",
        detail: String(error),
      });
    }
  }

  // ISS-03-E — DELETE físico /api/citas-servicio/:id
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const service_appointment =
        await ServiceAppointment.findByPk(id);

      if (!service_appointment) {
        res.status(404).json({
          error: "Service appointment not found",
        });
        return;
      }

      await service_appointment.destroy();

      res.status(200).json({
        message: "Service appointment deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting service appointment",
        detail: String(error),
      });
    }
  }

  // ISS-03-E — DELETE lógico /api/citas-servicio/:id/deactivate
  public async deleteLogical(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const service_appointment =
        await ServiceAppointment.findByPk(id);

      if (!service_appointment) {
        res.status(404).json({
          error: "Service appointment not found",
        });
        return;
      }

      await service_appointment.update({
        isActive: false,
      });

      res.status(200).json({
        message: "Service appointment deactivated successfully",
        service_appointment,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deactivating service appointment",
        detail: String(error),
      });
    }
  }
}
