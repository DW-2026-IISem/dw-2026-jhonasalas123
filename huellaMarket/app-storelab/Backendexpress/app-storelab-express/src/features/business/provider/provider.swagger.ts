export const providerSwagger = {
  tags: [
    {
      name: "Proveedores",
      description: "Operaciones CRUD de proveedores",
    },
  ],

  paths: {
    "/api/proveedores": {
      get: {
        tags: ["Proveedores"],
        summary: "Obtener todos los proveedores activos",
        responses: {
          200: {
            description: "Lista de proveedores",
          },
        },
      },
      post: {
        tags: ["Proveedores"],
        summary: "Crear proveedor",
        responses: {
          201: {
            description: "Proveedor creado",
          },
        },
      },
    },

    "/api/proveedores/{id}": {
      get: {
        tags: ["Proveedores"],
        summary: "Obtener proveedor por ID",
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
            description: "Proveedor encontrado",
          },
          404: {
            description: "Proveedor no encontrado",
          },
        },
      },

      put: {
        tags: ["Proveedores"],
        summary: "Actualizar proveedor completamente",
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
            description: "Proveedor actualizado",
          },
        },
      },

      patch: {
        tags: ["Proveedores"],
        summary: "Actualizar parcialmente un proveedor",
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
            description: "Proveedor actualizado parcialmente",
          },
        },
      },

      delete: {
        tags: ["Proveedores"],
        summary: "Eliminar proveedor físicamente",
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
            description: "Proveedor eliminado",
          },
        },
      },
    },

    "/api/proveedores/{id}/deactivate": {
      delete: {
        tags: ["Proveedores"],
        summary: "Desactivar proveedor",
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
            description: "Proveedor desactivado",
          },
        },
      },
    },
  },
};
