import { Request, Response } from "express";
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { PetService, PetServiceI } from "./pet-service.model";

@ApiTags("Servicios de Mascotas")
export class PetServiceController {

  // GET /api/servicios-mascota
  @ApiOperation({ summary: "Obtener todos los servicios de mascotas" })
  @ApiResponse({ status: 200, description: "Servicios obtenidos correctamente" })
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const pet_services = await PetService.findAll({
        where: { isActive: true },
      });

      res.status(200).json({ pet_services });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching pet services",
        detail: String(error),
      });
    }
  }

  // GET /api/servicios-mascota/:id
  @ApiOperation({ summary: "Obtener un servicio de mascota por ID" })
  @ApiResponse({ status: 200, description: "Servicio encontrado" })
  @ApiResponse({ status: 404, description: "Servicio no encontrado" })
  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const pet_service = await PetService.findByPk(id);

      if (!pet_service) {
        res.status(404).json({
          error: "Pet service not found",
        });
        return;
      }

      res.status(200).json({ pet_service });
    } catch (error) {
      res.status(500).json({
        error: "Error fetching pet service",
        detail: String(error),
      });
    }
  }

  // POST /api/servicios-mascota
  @ApiOperation({ summary: "Crear un servicio de mascota" })
  @ApiResponse({ status: 201, description: "Servicio creado correctamente" })
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body as PetServiceI;

      const pet_service = await PetService.create({
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        isActive: body.isActive ?? true,
      });

      res.status(201).json({ pet_service });
    } catch (error) {
      res.status(500).json({
        error: "Error creating pet service",
        detail: String(error),
      });
    }
  }

  // PUT /api/servicios-mascota/:id
  @ApiOperation({ summary: "Actualizar un servicio de mascota" })
  @ApiResponse({ status: 200, description: "Servicio actualizado correctamente" })
  @ApiResponse({ status: 404, description: "Servicio no encontrado" })
  public async updatePut(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const pet_service = await PetService.findByPk(id);

      if (!pet_service) {
        res.status(404).json({
          error: "Pet service not found",
        });
        return;
      }

      const body = req.body as PetServiceI;

      await pet_service.update({
        nombre: body.nombre,
        descripcion: body.descripcion ?? null,
        isActive: body.isActive ?? true,
      });

      res.status(200).json({ pet_service });
    } catch (error) {
      res.status(500).json({
        error: "Error updating pet service",
        detail: String(error),
      });
    }
  }

  // PATCH /api/servicios-mascota/:id
  @ApiOperation({ summary: "Actualizar parcialmente un servicio de mascota" })
  @ApiResponse({ status: 200, description: "Servicio actualizado parcialmente" })
  public async updatePatch(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const pet_service = await PetService.findByPk(id);

      if (!pet_service) {
        res.status(404).json({
          error: "Pet service not found",
        });
        return;
      }

      const body = req.body as Partial<PetServiceI>;

      await pet_service.update(body);

      res.status(200).json({ pet_service });
    } catch (error) {
      res.status(500).json({
        error: "Error patching pet service",
        detail: String(error),
      });
    }
  }

  // DELETE físico /api/servicios-mascota/:id
  @ApiOperation({ summary: "Eliminar físicamente un servicio de mascota" })
  @ApiResponse({ status: 200, description: "Servicio eliminado correctamente" })
  public async deletePhysical(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const pet_service = await PetService.findByPk(id);

      if (!pet_service) {
        res.status(404).json({
          error: "Pet service not found",
        });
        return;
      }

      await pet_service.destroy();

      res.status(200).json({
        message: "Pet service deleted successfully",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting pet service",
        detail: String(error),
      });
    }
  }

  // DELETE lógico /api/servicios-mascota/:id/deactivate
  @ApiOperation({ summary: "Desactivar un servicio de mascota" })
  @ApiResponse({ status: 200, description: "Servicio desactivado correctamente" })
  public async deleteLogical(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);

      const pet_service = await PetService.findByPk(id);

      if (!pet_service) {
        res.status(404).json({
          error: "Pet service not found",
        });
        return;
      }

      await pet_service.update({
        isActive: false,
      });

      res.status(200).json({
        message: "Pet service deactivated successfully",
        id,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error deactivating pet service",
        detail: String(error),
      });
    }
  }
}
