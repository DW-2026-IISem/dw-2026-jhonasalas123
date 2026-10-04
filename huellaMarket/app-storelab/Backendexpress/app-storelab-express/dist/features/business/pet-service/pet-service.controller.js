"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetServiceController = void 0;
const swagger_1 = require("@nestjs/swagger");
const pet_service_model_1 = require("./pet-service.model");
let PetServiceController = class PetServiceController {
    // GET /api/servicios-mascota
    async getAll(req, res) {
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
};
exports.PetServiceController = PetServiceController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener todos los servicios de mascotas" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Servicios obtenidos correctamente" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obtener un servicio de mascota por ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Servicio encontrado" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Servicio no encontrado" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Crear un servicio de mascota" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Servicio creado correctamente" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un servicio de mascota" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Servicio actualizado correctamente" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Servicio no encontrado" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "updatePut", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Actualizar parcialmente un servicio de mascota" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Servicio actualizado parcialmente" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "updatePatch", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Eliminar físicamente un servicio de mascota" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Servicio eliminado correctamente" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "deletePhysical", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Desactivar un servicio de mascota" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Servicio desactivado correctamente" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetServiceController.prototype, "deleteLogical", null);
exports.PetServiceController = PetServiceController = __decorate([
    (0, swagger_1.ApiTags)("Servicios de Mascotas")
], PetServiceController);
//# sourceMappingURL=pet-service.controller.js.map