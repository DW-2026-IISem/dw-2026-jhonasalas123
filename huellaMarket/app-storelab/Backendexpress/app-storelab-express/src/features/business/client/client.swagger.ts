export const clientSwagger = {
  tags: [
    {
      name: "Clientes",
      description: "Operaciones CRUD de clientes — SIN AUTH",
    },
  ],

  paths: {
    "/api/clients": {
      get: {
        tags: ["Clientes"],
        summary: "Listar clientes",
        description: "SIN AUTH",
        security: [],
        responses: {
          "200": {
            description: "Lista de clientes",
          },
        },
      },

      post: {
        tags: ["Clientes"],
        summary: "Crear cliente",
        description: "SIN AUTH",
        security: [],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ClientCreate",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Cliente creado",
          },
        },
      },
    },

    "/api/clients/{id}": {
      get: {
        tags: ["Clientes"],
        summary: "Obtener cliente por ID",
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
            description: "Cliente encontrado",
          },
          "404": {
            description: "Cliente no encontrado",
          },
        },
      },

      put: {
        tags: ["Clientes"],
        summary: "Actualizar cliente",
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
                $ref: "#/components/schemas/ClientUpdate",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Cliente actualizado",
          },
          "404": {
            description: "Cliente no encontrado",
          },
        },
      },

      patch: {
        tags: ["Clientes"],
        summary: "Actualizar parcialmente cliente",
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
                $ref: "#/components/schemas/ClientPatch",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Cliente actualizado",
          },
          "404": {
            description: "Cliente no encontrado",
          },
        },
      },

      delete: {
        tags: ["Clientes"],
        summary: "Eliminar cliente",
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
            description: "Cliente eliminado",
          },
          "404": {
            description: "Cliente no encontrado",
          },
        },
      },
    },

    "/api/clients/{id}/deactivate": {
      patch: {
        tags: ["Clientes"],
        summary: "Desactivar cliente",
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
            description: "Cliente desactivado",
          },
          "404": {
            description: "Cliente no encontrado",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Client: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          tipo_documento: {
            type: "string",
            example: "CC",
          },
          numero_documento: {
            type: "string",
            example: "1234567890",
          },
          nombre: {
            type: "string",
            example: "Juan Pérez",
          },
          telefono: {
            type: "string",
            example: "3001234567",
          },
          email: {
            type: "string",
            format: "email",
            example: "juan@example.com",
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

      ClientCreate: {
        type: "object",
        required: [
          "tipo_documento",
          "numero_documento",
          "nombre",
        ],
        properties: {
          tipo_documento: {
            type: "string",
            example: "CC",
          },
          numero_documento: {
            type: "string",
            example: "1234567890",
          },
          nombre: {
            type: "string",
            example: "Juan Pérez",
          },
          telefono: {
            type: "string",
            example: "3001234567",
          },
          email: {
            type: "string",
            format: "email",
            example: "juan@example.com",
          },
          is_active: {
            type: "boolean",
            default: true,
          },
        },
      },

      ClientUpdate: {
        type: "object",
        required: [
          "tipo_documento",
          "numero_documento",
          "nombre",
        ],
        properties: {
          tipo_documento: {
            type: "string",
          },
          numero_documento: {
            type: "string",
          },
          nombre: {
            type: "string",
          },
          telefono: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          is_active: {
            type: "boolean",
          },
        },
      },

      ClientPatch: {
        type: "object",
        properties: {
          tipo_documento: {
            type: "string",
          },
          numero_documento: {
            type: "string",
          },
          nombre: {
            type: "string",
          },
          telefono: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          is_active: {
            type: "boolean",
          },
        },
      },
    },
  },
};
