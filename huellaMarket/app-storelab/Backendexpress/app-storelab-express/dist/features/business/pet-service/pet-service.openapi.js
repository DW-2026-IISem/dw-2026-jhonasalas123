"use strict";
/**
 * Documentación OpenAPI del feature PetService.
 * Se agrega desde el registry externo de Swagger.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.petServiceOpenApi = void 0;
exports.petServiceOpenApi = {
    tags: [
        {
            name: "Servicios de mascotas",
            description: "CRUD de servicios para mascotas",
        },
    ],
    paths: {
        "/api/servicios-mascota": {
            get: {
                tags: ["Servicios de mascotas"],
                summary: "Listar servicios de mascotas",
                responses: {
                    "200": {
                        description: "Lista de servicios de mascotas",
                    },
                },
            },
            post: {
                tags: ["Servicios de mascotas"],
                summary: "Crear un servicio para mascotas",
                responses: {
                    "201": {
                        description: "Servicio creado correctamente",
                    },
                },
            },
        },
        "/api/servicios-mascota/{id}": {
            get: {
                tags: ["Servicios de mascotas"],
                summary: "Obtener un servicio por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Servicio encontrado" },
                    "404": { description: "Servicio no encontrado" },
                },
            },
            put: {
                tags: ["Servicios de mascotas"],
                summary: "Actualizar un servicio",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Servicio actualizado" },
                    "404": { description: "Servicio no encontrado" },
                },
            },
            patch: {
                tags: ["Servicios de mascotas"],
                summary: "Actualizar parcialmente un servicio",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Servicio actualizado" },
                    "404": { description: "Servicio no encontrado" },
                },
            },
            delete: {
                tags: ["Servicios de mascotas"],
                summary: "Eliminar un servicio",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Servicio eliminado" },
                    "404": { description: "Servicio no encontrado" },
                },
            },
        },
    },
};
//# sourceMappingURL=pet-service.openapi.js.map