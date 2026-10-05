/**
 * Documentación Swagger del feature ResourceRoles.
 *
 * Las rutas requieren JWT + RBAC.
 */

export const resourceRolesSwagger = {
  tags: [
    {
      name: "ResourceRoles",
      description: "Concesiones de recursos a roles",
    },
  ],

  paths: {
    "/api/concesiones-rol": {
      get: {
        tags: ["ResourceRoles"],
        summary: "Listar concesiones rol-recurso",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "role_id",
            in: "query",
            required: false,
            schema: {
              type: "integer",
            },
          },
          {
            name: "resource_id",
            in: "query",
            required: false,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Concesiones activas",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
        },
      },

      post: {
        tags: ["ResourceRoles"],
        summary: "Conceder un recurso a un rol",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResourceRoleCreate",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Recurso concedido al rol",
          },
          400: {
            description: "Datos obligatorios faltantes",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Rol o recurso no encontrado/inactivo",
          },
          409: {
            description: "El rol ya tiene este recurso concedido",
          },
        },
      },
    },

    "/api/concesiones-rol/{id}": {
      get: {
        tags: ["ResourceRoles"],
        summary: "Obtener una concesión rol-recurso",
        security: [{ bearerAuth: [] }],
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
            description: "Concesión encontrada",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Concesión no encontrada",
          },
        },
      },
    },

    "/api/concesiones-rol/{id}/deactivate": {
      patch: {
        tags: ["ResourceRoles"],
        summary: "Revocar un permiso",
        security: [{ bearerAuth: [] }],
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
            description: "Permiso revocado",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Concesión no encontrada",
          },
        },
      },
    },

    "/api/concesiones-rol/{id}/reactivate": {
      patch: {
        tags: ["ResourceRoles"],
        summary: "Reactivar un permiso",
        security: [{ bearerAuth: [] }],
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
            description: "Permiso reactivado",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Concesión no encontrada",
          },
          409: {
            description: "La concesión ya está activa",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      ResourceRole: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          role_id: {
            type: "integer",
            example: 2,
          },
          resource_id: {
            type: "integer",
            example: 3,
          },
          status: {
            type: "string",
            enum: ["active", "inactive"],
            example: "active",
          },
          role: {
            type: "object",
            nullable: true,
            properties: {
              id: {
                type: "integer",
                example: 2,
              },
              name: {
                type: "string",
                example: "SELLER",
              },
            },
          },
          resource: {
            type: "object",
            nullable: true,
            properties: {
              id: {
                type: "integer",
                example: 3,
              },
              method: {
                type: "string",
                example: "POST",
              },
              path: {
                type: "string",
                example: "/api/clientes",
              },
              description: {
                type: "string",
                nullable: true,
                example: "Crear cliente",
              },
            },
          },
        },
      },

      ResourceRoleCreate: {
        type: "object",
        required: ["role_id", "resource_id"],
        properties: {
          role_id: {
            type: "integer",
            example: 2,
          },
          resource_id: {
            type: "integer",
            example: 3,
          },
        },
      },
    },
  },
};
