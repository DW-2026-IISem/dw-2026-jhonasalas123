"use strict";
/**
 * Documentación OpenAPI del feature ServiceAppointment.
 * Se agrega desde `src/swagger` (registry externo), no se monta aquí.
 *
 * Leyenda: endpoints documentados como SIN AUTH (sin middleware JWT).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceAppointmentSwagger = void 0;
exports.serviceAppointmentSwagger = {
    tags: [
        {
            name: "Citas de Servicio",
            description: "CRUD de citas de servicio — **SIN AUTH**",
        },
    ],
    paths: {
        "/api/citas-servicio": {
            get: {
                tags: ["Citas de Servicio"],
                summary: "Listar citas de servicio activas",
                description: "SIN AUTH",
                security: [],
                responses: {
                    "200": {
                        description: "Lista de citas de servicio",
                    },
                },
            },
            post: {
                tags: ["Citas de Servicio"],
                summary: "Crear cita de servicio",
                description: "SIN AUTH",
                security: [],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ServiceAppointmentCreate",
                            },
                        },
                    },
                },
                responses: {
                    "201": { description: "Cita de servicio creada" },
                },
            },
        },
        "/api/citas-servicio/{id}": {
            get: {
                tags: ["Citas de Servicio"],
                summary: "Obtener cita de servicio por id",
                description: "SIN AUTH",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Cita encontrada" },
                    "404": { description: "No encontrada" },
                },
            },
            put: {
                tags: ["Citas de Servicio"],
                summary: "Actualizar cita de servicio (PUT)",
                description: "SIN AUTH",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ServiceAppointmentUpdate",
                            },
                        },
                    },
                },
                responses: {
                    "200": { description: "Actualizada" },
                    "404": { description: "No encontrada" },
                },
            },
            patch: {
                tags: ["Citas de Servicio"],
                summary: "Actualizar cita de servicio (PATCH)",
                description: "SIN AUTH",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ServiceAppointmentPatch",
                            },
                        },
                    },
                },
                responses: {
                    "200": { description: "Actualizada" },
                    "404": { description: "No encontrada" },
                },
            },
            delete: {
                tags: ["Citas de Servicio"],
                summary: "Eliminar cita de servicio (físico)",
                description: "SIN AUTH — borra la fila",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Eliminada" },
                    "404": { description: "No encontrada" },
                },
            },
        },
        "/api/citas-servicio/{id}/deactivate": {
            delete: {
                tags: ["Citas de Servicio"],
                summary: "Eliminar cita de servicio (lógico)",
                description: "SIN AUTH — isActive = false",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                responses: {
                    "200": { description: "Desactivada" },
                    "404": { description: "No encontrada" },
                },
            },
        },
    },
    components: {
        schemas: {
            ServiceAppointment: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nombre: {
                        type: "string",
                        example: "Baño y peluquería",
                    },
                    descripcion: {
                        type: "string",
                        example: "Baño, secado y corte completo",
                    },
                    isActive: {
                        type: "boolean",
                        example: true,
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            ServiceAppointmentCreate: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string",
                        example: "Baño y peluquería",
                    },
                    descripcion: {
                        type: "string",
                        example: "Baño, secado y corte completo",
                    },
                    isActive: {
                        type: "boolean",
                        default: true,
                    },
                },
            },
            ServiceAppointmentUpdate: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: { type: "string" },
                    descripcion: { type: "string" },
                    isActive: { type: "boolean" },
                },
            },
            ServiceAppointmentPatch: {
                type: "object",
                properties: {
                    nombre: { type: "string" },
                    descripcion: { type: "string" },
                    isActive: { type: "boolean" },
                },
            },
        },
    },
};
//# sourceMappingURL=service-appointment.swagger.js.map