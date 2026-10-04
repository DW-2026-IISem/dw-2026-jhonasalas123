export const productSwagger = {
  tags: [
    {
      name: "Productos",
      description: "Operaciones CRUD de productos",
    },
  ],

  paths: {
    "/api/productos": {
      get: {
        tags: ["Productos"],
        summary: "Obtener todos los productos activos",
        responses: {
          200: {
            description: "Lista de productos",
          },
        },
      },
      post: {
        tags: ["Productos"],
        summary: "Crear producto",
        responses: {
          201: {
            description: "Producto creado",
          },
        },
      },
    },

    "/api/productos/{id}": {
      get: {
        tags: ["Productos"],
        summary: "Obtener producto por ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: {
            description: "Producto encontrado",
          },
          404: {
            description: "Producto no encontrado",
          },
        },
      },

      put: {
        tags: ["Productos"],
        summary: "Actualizar producto completamente",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: {
            description: "Producto actualizado",
          },
        },
      },

      patch: {
        tags: ["Productos"],
        summary: "Actualizar parcialmente un producto",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: {
            description: "Producto actualizado parcialmente",
          },
        },
      },

      delete: {
        tags: ["Productos"],
        summary: "Eliminar producto físicamente",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: {
            description: "Producto eliminado",
          },
        },
      },
    },

    "/api/productos/{id}/deactivate": {
      delete: {
        tags: ["Productos"],
        summary: "Desactivar producto",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: {
            description: "Producto desactivado",
          },
        },
      },
    },
  },
};
