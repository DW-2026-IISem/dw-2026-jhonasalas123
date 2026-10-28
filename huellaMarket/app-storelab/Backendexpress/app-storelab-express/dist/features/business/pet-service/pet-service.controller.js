"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetServiceController = void 0;
const pet_service_model_1 = require("./pet-service.model");
function paramId(req) {
    const raw = req.params.id;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return Number(value);
}
class PetServiceController {
    async getAll(_req, res) {
        try {
            const pet_services = await pet_service_model_1.PetService.findAll({
                where: { isActive: true },
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
    async getOne(req, res) {
        try {
            const id = paramId(req);
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
    async create(req, res) {
        try {
            const body = req.body;
            const pet_service = await pet_service_model_1.PetService.create({
                nombre: body.nombre,
                descripcion: body.descripcion ?? null,
                isActive: body.isActive ?? true,
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
    async updatePut(req, res) {
        try {
            const id = paramId(req);
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
                isActive: body.isActive ?? true,
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
    async updatePatch(req, res) {
        try {
            const id = paramId(req);
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
    async deletePhysical(req, res) {
        try {
            const id = paramId(req);
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
                id,
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Error deleting pet service",
                detail: String(error),
            });
        }
    }
    async deleteLogical(req, res) {
        try {
            const id = paramId(req);
            const pet_service = await pet_service_model_1.PetService.findByPk(id);
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