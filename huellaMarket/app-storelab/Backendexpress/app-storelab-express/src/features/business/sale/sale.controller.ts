import { Request, Response } from "express";
import { Sale, SaleI } from "./sale.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class SaleController {

  // ================== READ ==================

  // ISS-03-B — GET /api/ventas
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const sales = await Sale.findAll();

      res.status(200).json({ sales });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching sales",
        detail: String(error),
      });
    }
  }

  // ISS-03-B — GET /api/ventas/:id
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const sale = await Sale.findByPk(id);

      if (!sale) {
        res.status(404).json({
          error: "Sale not found",
        });
        return;
      }

      res.status(200).json({ sale });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching sale",
        detail: String(error),
      });
    }
  }

  // ================== CREATE ==================

  // ISS-03-C — POST /api/ventas
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as SaleI;

      const sale = await Sale.create({
        cliente_id: body.cliente_id,
        fecha: body.fecha ?? new Date(),
        subtotal: body.subtotal ?? 0,
        impuestos: body.impuestos ?? 0,
        total: body.total ?? 0,
        estado: body.estado ?? "pendiente",
      });

      res.status(201).json({ sale });
    } catch (error) {
      res.status(500).json({
        error: "Error creating sale",
        detail: String(error),
      });
    }
  }

  // ================== UPDATE ==================

  // ISS-03-D — PUT /api/ventas/:id
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const sale = await Sale.findByPk(id);

      if (!sale) {
        res.status(404).json({
          error: "Sale not found",
        });
        return;
      }

      const body = req.body as SaleI;

      await sale.update({
        cliente_id: body.cliente_id,
        fecha: body.fecha,
        subtotal: body.subtotal,
        impuestos: body.impuestos,
        total: body.total,
        estado: body.estado,
      });

      res.status(200).json({ sale });
    } catch (error) {
      res.status(500).json({
        error: "Error updating sale (PUT)",
        detail: String(error),
      });
    }
  }

  // ISS-03-D — PATCH /api/ventas/:id
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const sale = await Sale.findByPk(id);

      if (!sale) {
        res.status(404).json({
          error: "Sale not found",
        });
        return;
      }

      const body = req.body as Partial<SaleI>;

      await sale.update(body);

      res.status(200).json({ sale });
    } catch (error) {
      res.status(500).json({
        error: "Error updating sale (PATCH)",
        detail: String(error),
      });
    }
  }

  // ================== DELETE ==================

  // ISS-03-E — DELETE /api/ventas/:id
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const sale = await Sale.findByPk(id);

      if (!sale) {
        res.status(404).json({
          error: "Sale not found",
        });
        return;
      }

      await sale.destroy();

      res.status(200).json({
        message: "Sale permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting sale",
        detail: String(error),
      });
    }
  }
}
