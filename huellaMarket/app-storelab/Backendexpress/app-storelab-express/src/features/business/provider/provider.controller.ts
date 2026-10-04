import { Request, Response } from "express";
import { Provider, ProviderI } from "./provider.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class ProviderController {

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const providers = await Provider.findAll({
        where: { isActive: true },
      });

      res.status(200).json({ providers });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching providers",
        detail: String(error),
      });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const provider = await Provider.findByPk(id);

      if (!provider) {
        res.status(404).json({ error: "Provider not found" });
        return;
      }

      res.status(200).json({ provider });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching provider",
        detail: String(error),
      });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as ProviderI;

      const provider = await Provider.create({
        nit: body.nit,
        razon_social: body.razon_social,
        contacto: body.contacto ?? null,
        telefono: body.telefono ?? null,
        email: body.email ?? null,
        isActive: body.isActive ?? true,
      });

      res.status(201).json({ provider });
    } catch (error) {
      res.status(500).json({
        error: "Error creating provider",
        detail: String(error),
      });
    }
  }

  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const provider = await Provider.findByPk(id);

      if (!provider) {
        res.status(404).json({ error: "Provider not found" });
        return;
      }

      const body = req.body as ProviderI;

      await provider.update({
        nit: body.nit,
        razon_social: body.razon_social,
        contacto: body.contacto ?? null,
        telefono: body.telefono ?? null,
        email: body.email ?? null,
        isActive: body.isActive ?? true,
      });

      res.status(200).json({ provider });
    } catch (error) {
      res.status(500).json({
        error: "Error updating provider (PUT)",
        detail: String(error),
      });
    }
  }

  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const provider = await Provider.findByPk(id);

      if (!provider) {
        res.status(404).json({ error: "Provider not found" });
        return;
      }

      const body = req.body as Partial<ProviderI>;

      await provider.update(body);

      res.status(200).json({ provider });
    } catch (error) {
      res.status(500).json({
        error: "Error updating provider (PATCH)",
        detail: String(error),
      });
    }
  }

  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const provider = await Provider.findByPk(id);

      if (!provider) {
        res.status(404).json({ error: "Provider not found" });
        return;
      }

      await provider.destroy();

      res.status(200).json({
        message: "Provider permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting provider",
        detail: String(error),
      });
    }
  }

  public async deleteLogical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const provider = await Provider.findByPk(id);

      if (!provider) {
        res.status(404).json({ error: "Provider not found" });
        return;
      }

      await provider.update({
        isActive: false,
      });

      res.status(200).json({
        message: "Provider deactivated successfully",
        provider,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deactivating provider",
        detail: String(error),
      });
    }
  }
}
