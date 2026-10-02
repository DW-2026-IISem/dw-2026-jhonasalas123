import { Request, Response } from "express";
import { HealthRecord, HealthRecordI } from "./health-record.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class HealthRecordController {
  // ================== READ ==================

  public async getAll(req: Request, res: Response) {
    try {
      const health_records = await HealthRecord.findAll({
        where: { is_active: true },
      });

      res.status(200).json({ health_records });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching health records",
        detail: String(error),
      });
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const health_record = await HealthRecord.findByPk(id);

      if (!health_record) {
        res.status(404).json({ error: "Health record not found" });
        return;
      }

      res.status(200).json({ health_record });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching health record",
        detail: String(error),
      });
    }
  }

  // ================== CREATE ==================

  public async create(req: Request, res: Response) {
    try {
      const body = req.body as HealthRecordI;

      const health_record = await HealthRecord.create({
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        is_active: body.is_active ?? true,
      });

      res.status(201).json({ health_record });
    } catch (error) {
      res.status(500).json({
        error: "Error creating health record",
        detail: String(error),
      });
    }
  }

  // ================== UPDATE ==================

  public async updatePut(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const body = req.body as HealthRecordI;
      const health_record = await HealthRecord.findByPk(id);

      if (!health_record) {
        res.status(404).json({ error: "Health record not found" });
        return;
      }

      await health_record.update({
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        is_active: body.is_active ?? health_record.is_active,
      });

      res.status(200).json({ health_record });
    } catch (error) {
      res.status(500).json({
        error: "Error updating health record (PUT)",
        detail: String(error),
      });
    }
  }

  public async updatePatch(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const body = req.body as Partial<HealthRecordI>;
      const health_record = await HealthRecord.findByPk(id);

      if (!health_record) {
        res.status(404).json({ error: "Health record not found" });
        return;
      }

      await health_record.update(body);

      res.status(200).json({ health_record });
    } catch (error) {
      res.status(500).json({
        error: "Error updating health record (PATCH)",
        detail: String(error),
      });
    }
  }

  // ================== DELETE ==================

  /** Eliminación física */
  public async deletePhysical(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const health_record = await HealthRecord.findByPk(id);

      if (!health_record) {
        res.status(404).json({ error: "Health record not found" });
        return;
      }

      await health_record.destroy();

      res.status(200).json({
        message: "Health record permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting health record",
        detail: String(error),
      });
    }
  }

  /** Eliminación lógica → is_active = false */
  public async deleteLogical(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const health_record = await HealthRecord.findByPk(id);

      if (!health_record) {
        res.status(404).json({ error: "Health record not found" });
        return;
      }

      await health_record.update({ is_active: false });

      res.status(200).json({
        message: "Health record deactivated (logical delete)",
        health_record,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deactivating health record",
        detail: String(error),
      });
    }
  }
}
