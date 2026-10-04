export const paymentSwagger = {
  tags: [
    {
      name: "Pago",
      description: "Operaciones CRUD de pagos",
    },
  ],

  paths: {
    "/api/pagos": {
      get: {
        tags: ["Pago"],
        summary: "Obtener todos los pagos",
        responses: {
          200: {
            description: "Lista de pagos",
          },
        },
      },

      post: {
        tags: ["Pago"],
        summary: "Crear pago",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: [
                  "referencia_tipo",
                  "referencia_id",
                  "metodo",
                  "monto",
                ],
                properties: {
                  referencia_tipo: {
                    type: "string",
                    example: "venta",
                  },
                  referencia_id: {
                    type: "integer",
                    example: 1,
                  },
                  metodo: {
                    type: "string",
                    example: "efectivo",
                  },
                  monto: {
                    type: "number",
                    example: 59500,
                  },
                  fecha: {
                    type: "string",
                    format: "date-time",
                  },
                  estado: {
                    type: "string",
                    example: "pagado",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Pago creado",
          },
        },
      },
    },

    "/api/pagos/{id}": {
      get: {
        tags: ["Pago"],
        summary: "Obtener pago por ID",
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
            description: "Pago encontrado",
          },
          404: {
            description: "Pago no encontrado",
          },
        },
      },

      put: {
        tags: ["Pago"],
        summary: "Actualizar pago",
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
            description: "Pago actualizado",
          },
        },
      },

      patch: {
        tags: ["Pago"],
        summary: "Actualizar parcialmente pago",
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
            description: "Pago actualizado parcialmente",
          },
        },
      },

      delete: {
        tags: ["Pago"],
        summary: "Eliminar pago",
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
            description: "Pago eliminado",
          },
        },
      },
    },
  },
};
