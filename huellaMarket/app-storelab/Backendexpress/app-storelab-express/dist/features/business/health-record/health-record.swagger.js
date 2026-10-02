"use strict";
/**
 * Documentación OpenAPI del feature HealthRecord.
 * Se agrega desde `src/swagger` (registry externo), no se monta aquí.
 *
 * Leyenda: endpoints documentados como SIN AUTH (sin middleware JWT).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRecordSwagger = void 0;
exports.healthRecordSwagger = {
    tags: [
        {
            name: "FichasSanitarias",
            description: "CRUD de fichas sanitarias — **SIN AUTH** (sin middleware JWT)",
        },
    ],
    paths: {
        "/api/fichas-sanitarias": {
            get: {
                tags: ["FichasSanitarias"],
                summary: "Listar fichas sanitarias activas",
                description: "SIN AUTH — retorna fichas con is_active=true",
                security: [],
                responses: {
                    "200": {
                        description: "Lista de fichas sanitarias",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        health_records: {
                                            type: "array",
                                            items: {
                                                $ref: "#/components/schemas/HealthRecord",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["FichasSanitarias"],
                summary: "Crear ficha sanitaria",
                description: "SIN AUTH",
                security: [],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/HealthRecordCreate",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Ficha sanitaria creada",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        health_record: {
                                            $ref: "#/components/schemas/HealthRecord",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/fichas-sanitarias/{id}": {
            get: {
                tags: ["FichasSanitarias"],
                summary: "Obtener ficha sanitaria por id",
                description: "SIN AUTH",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Ficha sanitaria encontrada",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        health_record: {
                                            $ref: "#/components/schemas/HealthRecord",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
            put: {
                tags: ["FichasSanitarias"],
                summary: "Actualizar ficha sanitaria (PUT — reemplazo)",
                description: "SIN AUTH",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/HealthRecordUpdate",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Ficha sanitaria actualizada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
            patch: {
                tags: ["FichasSanitarias"],
                summary: "Actualizar ficha sanitaria (PATCH — parcial)",
                description: "SIN AUTH",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/HealthRecordPatch",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Ficha sanitaria actualizada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
            delete: {
                tags: ["FichasSanitarias"],
                summary: "Eliminar ficha sanitaria (físico)",
                description: "SIN AUTH — borra la fila",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Ficha sanitaria eliminada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
        },
        "/api/fichas-sanitarias/{id}/deactivate": {
            patch: {
                tags: ["FichasSanitarias"],
                summary: "Eliminar ficha sanitaria (lógico)",
                description: "SIN AUTH — is_active = false",
                security: [],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Ficha sanitaria desactivada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            HealthRecord: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1,
                    },
                    nombre: {
                        type: "string",
                        example: "Ficha sanitaria de Rocky",
                    },
                    descripcion: {
                        type: "string",
                        example: "Registro sanitario de la mascota",
                        nullable: true,
                    },
                    is_active: {
                        type: "boolean",
                        example: true,
                    },
                    created_at: {
                        type: "string",
                        format: "date-time",
                    },
                    updated_at: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            HealthRecordCreate: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string",
                        example: "Ficha sanitaria de Rocky",
                    },
                    descripcion: {
                        type: "string",
                        example: "Registro sanitario de la mascota",
                    },
                    is_active: {
                        type: "boolean",
                        default: true,
                    },
                },
            },
            HealthRecordUpdate: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string",
                    },
                    descripcion: {
                        type: "string",
                    },
                    is_active: {
                        type: "boolean",
                    },
                },
            },
            HealthRecordPatch: {
                type: "object",
                properties: {
                    nombre: {
                        type: "string",
                    },
                    descripcion: {
                        type: "string",
                    },
                    is_active: {
                        type: "boolean",
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=health-record.swagger.js.map