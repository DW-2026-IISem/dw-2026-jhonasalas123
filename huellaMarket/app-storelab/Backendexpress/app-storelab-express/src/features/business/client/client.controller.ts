import { Request, Response } from "express";
import { Client } from "./client.model";

function paramId(req: Request): number {
  const raw = req.params.id;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return Number(value);
}

export class ClientController {
  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const clients = await Client.findAll({
        where: { is_active: true },
        attributes: { exclude: ["password"] },
      });

      res.status(200).json({ clients });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching clients",
        detail: String(error),
      });
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const client = await Client.findByPk(id, {
        attributes: { exclude: ["password"] },
      });

      if (!client) {
        res.status(404).json({ error: "Client not found" });
        return;
      }

      res.status(200).json({ client });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching client",
        detail: String(error),
      });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as {
        tipo_documento: string;
        numero_documento: string;
        nombre: string;
        telefono?: string;
        email?: string;
      };

      const client = await Client.create({
        tipo_documento: body.tipo_documento,
        numero_documento: body.numero_documento,
        nombre: body.nombre,
        telefono: body.telefono,
        email: body.email,
        is_active: true,
      });

      res.status(201).json({ client });
    } catch (error) {
      res.status(500).json({
        error: "Error creating client",
        detail: String(error),
      });
    }
  }

  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const client = await Client.findByPk(id);

      if (!client) {
        res.status(404).json({ error: "Client not found" });
        return;
      }

      const body = req.body as {
        tipo_documento: string;
        numero_documento: string;
        nombre: string;
        telefono?: string;
        email?: string;
        is_active?: boolean;
      };

      await client.update({
        tipo_documento: body.tipo_documento,
        numero_documento: body.numero_documento,
        nombre: body.nombre,
        telefono: body.telefono,
        email: body.email,
        is_active: body.is_active ?? client.is_active,
      });

      res.status(200).json({ client });
    } catch (error) {
      res.status(500).json({
        error: "Error updating client (PUT)",
        detail: String(error),
      });
    }
  }

  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const client = await Client.findByPk(id);

      if (!client) {
        res.status(404).json({ error: "Client not found" });
        return;
      }

      await client.update(req.body);
      res.status(200).json({ client });
    } catch (error) {
      res.status(500).json({
        error: "Error updating client (PATCH)",
        detail: String(error),
      });
    }
  }

  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const client = await Client.findByPk(id);

      if (!client) {
        res.status(404).json({ error: "Client not found" });
        return;
      }

      await client.destroy();
      res.status(200).json({
        message: "Client permanently deleted",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting client",
        detail: String(error),
      });
    }
  }

  public async deleteLogical(req: Request, res: Response): Promise<void> {
    try {
      const id = paramId(req);
      const client = await Client.findByPk(id);

      if (!client) {
        res.status(404).json({ error: "Client not found" });
        return;
      }

      await client.update({ is_active: false });
      res.status(200).json({
        message: "Client deactivated (logical delete)",
        client,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deactivating client",
        detail: String(error),
      });
    }
  }
}
