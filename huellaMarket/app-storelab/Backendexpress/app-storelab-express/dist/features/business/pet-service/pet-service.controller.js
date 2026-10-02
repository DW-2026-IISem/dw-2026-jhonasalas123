"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetServiceController = void 0;
const pet_service_model_1 = require("./pet-service.model");
class PetServiceController {
    // GET /api/servicios-mascota
    async getAll(req, res) {
        try {
            const pet_services = await pet_service_model_1.PetService.findAll({
                where: { is_active: true },
            });
            res.status(200).json({ pet_services });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching pet services",
                detail: String(error),
            });
        }
    }
    // GET /api/servicios-mascota/:id
    async getOne(req, res) {
        try {
            const id = Number(req.params.id);
            const pet_service = await pet_service_model_1.PetService.findByPk(id);
            if (!pet_service) {
                res.status(404).json({
                    error: "Pet service not found",
                });
                return;
            }
            res.status(200).json({ pet_service });
        }
        catch (error) {
            res.status(500).json({
                error: "Error fetching pet service",
                detail: String(error),
            });
        }
    }
    // POST /api/servicios-mascota
    async create(req, res) {
        try {
            const body = req.body;
            const pet_service = await pet_service_model_1.PetService.create({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                is_active: body.is_active ?? true,
            });
            res.status(201).json({ pet_service });
        }
        catch (error) {
            res.status(500).json({
                error: "Error creating pet service",
                detail: String(error),
            });
        }
    }
    // PUT /api/servicios-mascota/:id
    async updatePut(req, res) {
        try {
            const id = Number(req.params.id);
            const pet_service = await pet_service_model_1.PetService.findByPk(id);
            if (!pet_service) {
                res.status(404).json({
                    error: "Pet service not found",
                });
                return;
            }
            const body = req.body;
            await pet_service.update({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                is_active: body.is_active ?? true,
            });
            res.status(200).json({ pet_service });
        }
        catch (error) {
            res.status(500).json({
                error: "Error updating pet service",
                detail: String(error),
            });
        }
    }
    // PATCH /api/servicios-mascota/:id
    async updatePatch(req, res) {
        try {
            const id = Number(req.params.id);
            const pet_service = await pet_service_model_1.PetService.findByPk(id);
            if (!pet_service) {
                res.status(404).json({
                    error: "Pet service not found",
                });
                return;
            }
            const body = req.body;
            await pet_service.update(body);
            res.status(200).json({ pet_service });
        }
        catch (error) {
            res.status(500).json({
                error: "Error patching pet service",
                detail: String(error),
            });
        }
    }
    // DELETE físico /api/servicios-mascota/:id
    async deletePhysical(req, res) {
        try {
            const id = Number(req.params.id);
            const pet_service = await pet_service_model_1.PetService.findByPk(id);
            if (!pet_service) {
                res.status(404).json({
                    error: "Pet service not found",
                });
                return;
            }
            await pet_service.destroy();
            res.status(200).json({
                message: "Pet service deleted successfully",
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting pet service",
                detail: String(error),
            });
        }
    }
    // DELETE lógico /api/servicios-mascota/:id/deactivate
    async deleteLogical(req, res) {
        try {
            const id = Number(req.params.id);
            const pet_service = await pet_service_model_1.PetService.findByPk(id);
            if (!pet_service) {
                res.status(404).json({
                    error: "Pet service not found",
                });
                return;
            }
            await pet_service.update({
                is_active: false,
            });
            res.status(200).json({
                message: "Pet service deactivated successfully",
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deactivating pet service",
                detail: String(error),
            });
        }
    }
}
exports.PetServiceController = PetServiceController;
//# sourceMappingURL=pet-service.controller.js.map