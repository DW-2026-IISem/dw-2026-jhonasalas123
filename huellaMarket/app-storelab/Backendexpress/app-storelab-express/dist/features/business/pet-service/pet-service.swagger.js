"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetServiceSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.PetServiceSwagger = {
    getAll: [
        (0, swagger_1.ApiOperation)({ summary: "Obtener todos los servicios de mascotas" }),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: "Lista de servicios de mascotas obtenida correctamente",
        }),
    ],
    getOne: [
        (0, swagger_1.ApiOperation)({ summary: "Obtener un servicio de mascota por ID" }),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: "Servicio de mascota encontrado",
        }),
        (0, swagger_1.ApiResponse)({
            status: 404,
            description: "Servicio de mascota no encontrado",
        }),
    ],
    create: [
        (0, swagger_1.ApiOperation)({ summary: "Crear un servicio de mascota" }),
        (0, swagger_1.ApiResponse)({
            status: 201,
            description: "Servicio de mascota creado correctamente",
        }),
    ],
    update: [
        (0, swagger_1.ApiOperation)({ summary: "Actualizar un servicio de mascota" }),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: "Servicio de mascota actualizado correctamente",
        }),
        (0, swagger_1.ApiResponse)({
            status: 404,
            description: "Servicio de mascota no encontrado",
        }),
    ],
    patch: [
        (0, swagger_1.ApiOperation)({ summary: "Actualizar parcialmente un servicio de mascota" }),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: "Servicio de mascota actualizado parcialmente",
        }),
    ],
    delete: [
        (0, swagger_1.ApiOperation)({ summary: "Desactivar un servicio de mascota" }),
        (0, swagger_1.ApiResponse)({
            status: 200,
            description: "Servicio de mascota desactivado correctamente",
        }),
    ],
};
//# sourceMappingURL=pet-service.swagger.js.map