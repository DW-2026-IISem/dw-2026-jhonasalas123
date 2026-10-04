"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleDetailSwagger = void 0;
exports.saleDetailSwagger = {
    tags: [
        {
            name: "VentaDetalle",
            description: "Operaciones CRUD de detalles de venta",
        },
    ],
    paths: {
        "/api/venta-detalles": {
            get: {
                tags: ["VentaDetalle"],
                summary: "Obtener todos los detalles de venta",
                responses: {
                    200: {
                        description: "Lista de detalles de venta",
                    },
                },
            },
            post: {
                tags: ["VentaDetalle"],
                summary: "Crear detalle de venta",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: [
                                    "cabecera_id",
                                    "item_id",
                                    "cantidad",
                                    "valor_unitario",
                                    "total",
                                ],
                                properties: {
                                    cabecera_id: { type: "integer", example: 1 },
                                    item_id: { type: "integer", example: 1 },
                                    cantidad: { type: "integer", example: 2 },
                                    valor_unitario: { type: "number", example: 25000 },
                                    total: { type: "number", example: 50000 },
                                    observaciones: {
                                        type: "string",
                                        example: "Producto entregado",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Detalle de venta creado",
                    },
                },
            },
        },
        "/api/venta-detalles/{id}": {
            get: {
                tags: ["VentaDetalle"],
                summary: "Obtener detalle de venta por ID",
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
                        description: "Detalle de venta encontrado",
                    },
                    404: {
                        description: "Detalle de venta no encontrado",
                    },
                },
            },
            put: {
                tags: ["VentaDetalle"],
                summary: "Actualizar detalle de venta",
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
                        description: "Detalle de venta actualizado",
                    },
                },
            },
            patch: {
                tags: ["VentaDetalle"],
                summary: "Actualizar parcialmente detalle de venta",
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
                        description: "Detalle de venta actualizado parcialmente",
                    },
                },
            },
            delete: {
                tags: ["VentaDetalle"],
                summary: "Eliminar detalle de venta",
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
                        description: "Detalle de venta eliminado",
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=sale-detail.swagger.js.map