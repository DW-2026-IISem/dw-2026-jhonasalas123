import { Request, Response } from "express";
import { Pet, PetI } from "./pet.model";

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
        where: { isActive: true },
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

  public async create(req: Request, res: Response) {
  try {
    const body = req.body as PetI;

    const pet = await Pet.create({
      nombre: body.nombre,
      descripcion: body.descripcion,
      isActive: body.isActive ?? true,
    });

    res.status(201).json({ pet });
  } catch (error) {
    res.status(500).json({
      error: "Error creating pet",
      detail: String(error),
    });
  }
}

  // ================== UPDATE ==================
  public async updatePut(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const body = req.body as PetI;
      const pet = await Pet.findByPk(id);

      if (!pet) {
        res.status(404).json({ error: "Pet not found" });
        return;
      }

      await pet.update({
        nombre: body.nombre,
        descripcion: body.descripcion,
        isActive: body.isActive ?? pet.isActive,
      });

      res.status(200).json({ pet });
    } catch (error) {
      res.status(500).json({
        error: "Error updating pet (PUT)",
        detail: String(error),
      });
    }
  }

  public async updatePatch(req: Request, res: Response) {
    try {
      const id = paramId(req);
      const body = req.body as Partial<PetI>;
      const pet = await Pet.findByPk(id);

      if (!pet) {
        res.status(404).json({ error: "Pet not found" });
        return;
      }

      await pet.update(body);

      res.status(200).json({ pet });
    } catch (error) {
      res.status(500).json({
        error: "Error updating pet (PATCH)",
        detail: String(error),
      });
    }
  }

  // ================== DELETE ==================
  // (rellenar en ISS-03-E)
}
