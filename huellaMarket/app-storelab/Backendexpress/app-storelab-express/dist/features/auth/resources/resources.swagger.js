"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourcesSwagger = void 0;
const swagger_security_1 = require("../../../shared/http/swagger-security");
exports.resourcesSwagger = {
    tags: [
        {
            name: "Recursos",
            description: "Catálogo de puntos de acceso protegibles: par `(method, path)` — JWT + RBAC",
        },
    ],
    paths: {
        "/api/recursos": {
            get: {
                tags: ["Recursos"],
                summary: "Listar recursos activos",
                security: swagger_security_1.bearerSecurity,
                responses: {
                    "200": {
                        description: "Lista de recursos",
                    },
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                },
            },
            post: {
                tags: ["Recursos"],
                summary: "Crear recurso",
                security: swagger_security_1.bearerSecurity,
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ResourceCreate",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Recurso creado",
                    },
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                    "409": {
                        description: "La tupla `(method, path)` ya existe",
                    },
                },
            },
        },
        "/api/recursos/{id}": {
            get: {
                tags: ["Recursos"],
                summary: "Obtener recurso por id",
                security: swagger_security_1.bearerSecurity,
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
                        description: "Recurso",
                    },
                    "400": swagger_security_1.invalidIdResponse,
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                    "404": swagger_security_1.notFoundResponse,
                },
            },
            put: {
                tags: ["Recursos"],
                summary: "Reemplazar recurso (PUT)",
                security: swagger_security_1.bearerSecurity,
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
                                $ref: "#/components/schemas/ResourceUpdate",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Recurso actualizado",
                    },
                    "400": swagger_security_1.invalidIdResponse,
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                    "404": swagger_security_1.notFoundResponse,
                },
            },
            patch: {
                tags: ["Recursos"],
                summary: "Modificar recurso (PATCH)",
                security: swagger_security_1.bearerSecurity,
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: { type: "integer" },
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ResourcePatch",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Recurso actualizado",
                    },
                    "400": swagger_security_1.invalidIdResponse,
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                    "404": swagger_security_1.notFoundResponse,
                },
            },
            delete: {
                tags: ["Recursos"],
                summary: "Eliminar recurso (físico)",
                security: swagger_security_1.bearerSecurity,
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
                        description: "Recurso eliminado",
                    },
                    "400": swagger_security_1.invalidIdResponse,
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                    "404": swagger_security_1.notFoundResponse,
                },
            },
        },
        "/api/recursos/{id}/deactivate": {
            patch: {
                tags: ["Recursos"],
                summary: "Desactivar recurso",
                security: swagger_security_1.bearerSecurity,
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
                        description: "Recurso desactivado",
                    },
                    "400": swagger_security_1.invalidIdResponse,
                    "401": swagger_security_1.unauthorizedResponse,
                    "403": swagger_security_1.forbiddenResponse,
                    "404": swagger_security_1.notFoundResponse,
                },
            },
        },
    },
    components: {
        schemas: {
            Resource: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    method: {
                        type: "string",
                        enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
                        example: "GET",
                    },
                    path: {
                        type: "string",
                        example: "/api/productos/:id",
                    },
                    description: {
                        type: "string",
                        nullable: true,
                    },
                    status: {
                        type: "string",
                        enum: ["active", "inactive"],
                        example: "active",
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
            ResourceCreate: {
                type: "object",
                required: ["method", "path"],
                properties: {
                    method: {
                        type: "string",
                        enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
                    },
                    path: {
                        type: "string",
                        example: "/api/reportes/:id",
                    },
                    description: {
                        type: "string",
                        nullable: true,
                    },
                    status: {
                        type: "string",
                        enum: ["active", "inactive"],
                        default: "active",
                    },
                },
            },
            ResourceUpdate: {
                type: "object",
                required: ["method", "path"],
                properties: {
                    method: {
                        type: "string",
                        enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
                    },
                    path: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                        nullable: true,
                    },
                },
            },
            ResourcePatch: {
                type: "object",
                properties: {
                    method: {
                        type: "string",
                        enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
                    },
                    path: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                        nullable: true,
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=resources.swagger.js.map