import { Request, Response } from "express";
import { SaleDetail, SaleDetailI } from "./sale-detail.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class SaleDetailController {

  // GET ALL
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const saleDetails = await SaleDetail.findAll();
      res.status(200).json({ saleDetails });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching sale details",
        detail: String(error),
      });
    }
  }

  // GET ONE
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const saleDetail = await SaleDetail.findByPk(id);

      if (!saleDetail) {
        res.status(404).json({ error: "Sale detail not found" });
        return;
      }

      res.status(200).json({ saleDetail });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching sale detail",
        detail: String(error),
      });
    }
  }

  // CREATE
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as SaleDetailI;

      const saleDetail = await SaleDetail.create({
        cabecera_id: body.cabecera_id,
        item_id: body.item_id,
        cantidad: body.cantidad,
        valor_unitario: body.valor_unitario,
        total: body.total,
        observaciones: body.observaciones,
      });

      res.status(201).json({ saleDetail });
    } catch (error) {
      res.status(500).json({
        error: "Error creating sale detail",
        detail: String(error),
      });
    }
  }

  // PUT
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const saleDetail = await SaleDetail.findByPk(id);

      if (!saleDetail) {
        res.status(404).json({ error: "Sale detail not found" });
        return;
      }

      const body = req.body as SaleDetailI;

      await saleDetail.update({
        cabecera_id: body.cabecera_id,
        item_id: body.item_id,
        cantidad: body.cantidad,
        valor_unitario: body.valor_unitario,
        total: body.total,
        observaciones: body.observaciones,
      });

      res.status(200).json({ saleDetail });
    } catch (error) {
      res.status(500).json({
        error: "Error updating sale detail (PUT)",
        detail: String(error),
      });
    }
  }

  // PATCH
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const saleDetail = await SaleDetail.findByPk(id);

      if (!saleDetail) {
        res.status(404).json({ error: "Sale detail not found" });
        return;
      }

      await saleDetail.update(req.body);

      res.status(200).json({ saleDetail });
    } catch (error) {
      res.status(500).json({
        error: "Error updating sale detail (PATCH)",
        detail: String(error),
      });
    }
  }

  // DELETE
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const saleDetail = await SaleDetail.findByPk(id);

      if (!saleDetail) {
        res.status(404).json({ error: "Sale detail not found" });
        return;
      }

      await saleDetail.destroy();

      res.status(200).json({
        message: "Sale detail permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting sale detail",
        detail: String(error),
      });
    }
  }
}
