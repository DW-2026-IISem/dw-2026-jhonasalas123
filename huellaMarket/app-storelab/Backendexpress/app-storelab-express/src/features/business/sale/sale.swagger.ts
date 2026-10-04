export const saleSwagger = {
  tags: [
    {
      name: "Venta",
      description: "Operaciones CRUD de ventas",
    },
  ],

  paths: {
    "/api/ventas": {
      get: {
        tags: ["Venta"],
        summary: "Obtener todas las ventas",
        responses: {
          200: {
            description: "Lista de ventas",
          },
        },
      },

      post: {
        tags: ["Venta"],
        summary: "Crear una venta",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: [
                  "cliente_id",
                  "subtotal",
                  "impuestos",
                  "total",
                  "estado",
                ],
                properties: {
                  cliente_id: {
                    type: "integer",
                    example: 1,
                  },
                  fecha: {
                    type: "string",
                    format: "date-time",
                    example: "2026-10-03T20:00:00.000Z",
                  },
                  subtotal: {
                    type: "number",
                    example: 50000,
                  },
                  impuestos: {
                    type: "number",
                    example: 9500,
                  },
                  total: {
                    type: "number",
                    example: 59500,
                  },
                  estado: {
                    type: "string",
                    example: "pendiente",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Venta creada correctamente",
          },
        },
      },
    },

    "/api/ventas/{id}": {
      get: {
        tags: ["Venta"],
        summary: "Obtener venta por ID",
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
            description: "Venta encontrada",
          },
          404: {
            description: "Venta no encontrada",
          },
        },
      },

      put: {
        tags: ["Venta"],
        summary: "Actualizar venta completa",
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
                  cliente_id: {
                    type: "integer",
                    example: 1,
                  },
                  fecha: {
                    type: "string",
                    format: "date-time",
                  },
                  subtotal: {
                    type: "number",
                    example: 60000,
                  },
                  impuestos: {
                    type: "number",
                    example: 11400,
                  },
                  total: {
                    type: "number",
                    example: 71400,
                  },
                  estado: {
                    type: "string",
                    example: "pagada",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Venta actualizada",
          },
        },
      },

      patch: {
        tags: ["Venta"],
        summary: "Actualizar parcialmente una venta",
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
                  estado: {
                    type: "string",
                    example: "pagada",
                  },
                  total: {
                    type: "number",
                    example: 71400,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Venta actualizada parcialmente",
          },
        },
      },

      delete: {
        tags: ["Venta"],
        summary: "Eliminar una venta",
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
            description: "Venta eliminada",
          },
          404: {
            description: "Venta no encontrada",
          },
        },
      },
    },
  },
};
