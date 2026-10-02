"use strict";
/**
 * Documentación OpenAPI del feature Pet.
 * Se agrega desde el registry externo de Swagger.
 *
 * Leyenda: endpoints documentados como SIN AUTH.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.petSwagger = void 0;
exports.petSwagger = {
    tags: [
        {
            name: "Mascotas",
            description: "CRUD de mascotas — SIN AUTH",
        },
    ],
    paths: {
        "/api/mascotas": {
            get: {
                tags: ["Mascotas"],
                summary: "Listar mascotas activas",
                description: "SIN AUTH",
                security: [],
                responses: {
                    "200": {
                        description: "Lista de mascotas",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        pets: {
                                            type: "array",
                                            items: { $ref: "#/components/schemas/Pet" },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ["Mascotas"],
                summary: "Crear mascota",
                description: "SIN AUTH",
                security: [],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/PetCreate" },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Mascota creada",
                    },
                },
            },
        },
        "/api/mascotas/{id}": {
            get: {
                tags: ["Mascotas"],
                summary: "Obtener mascota por id",
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
                    "200": {
                        description: "Mascota encontrada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
            put: {
                tags: ["Mascotas"],
                summary: "Actualizar mascota (PUT)",
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
                            schema: { $ref: "#/components/schemas/PetUpdate" },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Mascota actualizada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
            patch: {
                tags: ["Mascotas"],
                summary: "Actualizar mascota (PATCH)",
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
                            schema: { $ref: "#/components/schemas/PetPatch" },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Mascota actualizada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
            delete: {
                tags: ["Mascotas"],
                summary: "Eliminar mascota físicamente",
                description: "SIN AUTH — elimina la fila",
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
                    "200": {
                        description: "Mascota eliminada",
                    },
                    "404": {
                        description: "No encontrada",
                    },
                },
            },
        },
        "/api/mascotas/{id}/deactivate": {
            patch: {
                tags: ["Mascotas"],
                summary: "Eliminar mascota lógicamente",
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
                    "200": {
                        description: "Mascota desactivada",
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
            Pet: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1,
                    },
                    nombre: {
                        type: "string",
                        example: "Rocky",
                    },
                    descripcion: {
                        type: "string",
                        example: "Perro de compañía",
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
            PetCreate: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string",
                        example: "Rocky",
                    },
                    descripcion: {
                        type: "string",
                        example: "Perro de compañía",
                    },
                    isActive: {
                        type: "boolean",
                        default: true,
                    },
                },
            },
            PetUpdate: {
                type: "object",
                required: ["nombre"],
                properties: {
                    nombre: {
                        type: "string",
                    },
                    descripcion: {
                        type: "string",
                    },
                    isActive: {
                        type: "boolean",
                    },
                },
            },
            PetPatch: {
                type: "object",
                properties: {
                    nombre: {
                        type: "string",
                    },
                    descripcion: {
                        type: "string",
                    },
                    isActive: {
                        type: "boolean",
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=pet.swagger.js.map