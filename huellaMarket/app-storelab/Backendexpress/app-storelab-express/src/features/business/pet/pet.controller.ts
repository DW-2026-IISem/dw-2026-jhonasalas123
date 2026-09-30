import { Request, Response } from "express";
import { Pet } from "./pet.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class PetController {
  // ================== READ ==================

  public async getAll(req: Request, res: Response) {
    try {
      const pets = await Pet.findAll({
        where: { is_active: true },
      });

      res.status(200).json({ pets });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching pets",
        detail: String(error),
      });
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const id = paramId(req);

      const pet = await Pet.findByPk(id);

      if (!pet) {
        res.status(404).json({ error: "Pet not found" });
        return;
      }

      res.status(200).json({ pet });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching pet",
        detail: String(error),
      });
    }
  }

  // ================== CREATE ==================
  // (rellenar en ISS-03-C)

  // ================== UPDATE ==================
  // (rellenar en ISS-03-D)

  // ================== DELETE ==================
  // (rellenar en ISS-03-E)
}
