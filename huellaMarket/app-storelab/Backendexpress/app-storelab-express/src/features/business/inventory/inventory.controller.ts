import { Request, Response } from "express";
import { Inventory, InventoryI } from "./inventory.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class InventoryController {

  // ================== READ ==================

  // ISS-03-B — GET /api/inventarios
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const inventories = await Inventory.findAll();

      res.status(200).json({ inventories });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching inventories",
        detail: String(error),
      });
    }
  }

  // ISS-03-B — GET /api/inventarios/:id
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const inventory = await Inventory.findByPk(id);

      if (!inventory) {
        res.status(404).json({
          error: "Inventory not found",
        });
        return;
      }

      res.status(200).json({ inventory });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching inventory",
        detail: String(error),
      });
    }
  }

  // ================== CREATE ==================

  // ISS-03-C — POST /api/inventarios
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as InventoryI;

      const inventory = await Inventory.create({
        ubicacion_id: body.ubicacion_id,
        item_id: body.item_id,
        cantidad: body.cantidad,
        stock_minimo: body.stock_minimo,
      });

      res.status(201).json({ inventory });
    } catch (error) {
      res.status(500).json({
        error: "Error creating inventory",
        detail: String(error),
      });
    }
  }

  // ================== UPDATE ==================

  // ISS-03-D — PUT /api/inventarios/:id
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const inventory = await Inventory.findByPk(id);

      if (!inventory) {
        res.status(404).json({
          error: "Inventory not found",
        });
        return;
      }

      const body = req.body as InventoryI;

      await inventory.update({
        ubicacion_id: body.ubicacion_id,
        item_id: body.item_id,
        cantidad: body.cantidad,
        stock_minimo: body.stock_minimo,
      });

      res.status(200).json({ inventory });
    } catch (error) {
      res.status(500).json({
        error: "Error updating inventory (PUT)",
        detail: String(error),
      });
    }
  }

  // ISS-03-D — PATCH /api/inventarios/:id
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const inventory = await Inventory.findByPk(id);

      if (!inventory) {
        res.status(404).json({
          error: "Inventory not found",
        });
        return;
      }

      const body = req.body as Partial<InventoryI>;

      await inventory.update(body);

      res.status(200).json({ inventory });
    } catch (error) {
      res.status(500).json({
        error: "Error updating inventory (PATCH)",
        detail: String(error),
      });
    }
  }

  // ================== DELETE ==================

  // ISS-03-E — DELETE /api/inventarios/:id
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const inventory = await Inventory.findByPk(id);

      if (!inventory) {
        res.status(404).json({
          error: "Inventory not found",
        });
        return;
      }

      await inventory.destroy();

      res.status(200).json({
        message: "Inventory permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting inventory",
        detail: String(error),
      });
    }
  }
}
