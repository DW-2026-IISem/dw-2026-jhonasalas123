"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventorySwagger = void 0;
exports.inventorySwagger = {
    tags: [
        {
            name: "Inventario",
            description: "Operaciones CRUD de inventario",
        },
    ],
    paths: {
        "/api/inventarios": {
            get: {
                tags: ["Inventario"],
                summary: "Obtener todos los inventarios",
                responses: {
                    200: {
                        description: "Lista de inventarios",
                    },
                },
            },
            post: {
                tags: ["Inventario"],
                summary: "Crear inventario",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: [
                                    "ubicacion_id",
                                    "item_id",
                                    "cantidad",
                                    "stock_minimo",
                                ],
                                properties: {
                                    ubicacion_id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    item_id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    cantidad: {
                                        type: "integer",
                                        example: 100,
                                    },
                                    stock_minimo: {
                                        type: "integer",
                                        example: 10,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Inventario creado correctamente",
                    },
                },
            },
        },
        "/api/inventarios/{id}": {
            get: {
                tags: ["Inventario"],
                summary: "Obtener inventario por ID",
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
                    200: {
                        description: "Inventario encontrado",
                    },
                    404: {
                        description: "Inventario no encontrado",
                    },
                },
            },
            put: {
                tags: ["Inventario"],
                summary: "Actualizar inventario completo",
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
                                type: "object",
                                properties: {
                                    ubicacion_id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    item_id: {
                                        type: "integer",
                                        example: 1,
                                    },
                                    cantidad: {
                                        type: "integer",
                                        example: 80,
                                    },
                                    stock_minimo: {
                                        type: "integer",
                                        example: 10,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Inventario actualizado",
                    },
                },
            },
            patch: {
                tags: ["Inventario"],
                summary: "Actualizar parcialmente inventario",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "object",
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    cantidad: {
                                        type: "integer",
                                        example: 75,
                                    },
                                    stock_minimo: {
                                        type: "integer",
                                        example: 15,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Inventario actualizado parcialmente",
                    },
                },
            },
            delete: {
                tags: ["Inventario"],
                summary: "Eliminar inventario",
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
                    200: {
                        description: "Inventario eliminado",
                    },
                    404: {
                        description: "Inventario no encontrado",
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=inventory.swagger.js.map