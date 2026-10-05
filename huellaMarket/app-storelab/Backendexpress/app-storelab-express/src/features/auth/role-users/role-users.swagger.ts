/**
 * Documentación Swagger del feature RoleUsers.
 *
 * Las rutas requieren JWT + RBAC.
 */

export const roleUsersSwagger = {
  tags: [
    {
      name: "RoleUsers",
      description: "Asignaciones de roles a usuarios",
    },
  ],

  paths: {
    "/api/asignaciones-rol": {
      get: {
        tags: ["RoleUsers"],
        summary: "Listar asignaciones usuario-rol",
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: "Asignaciones activas",
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
        tags: ["RoleUsers"],
        summary: "Asignar un rol a un usuario",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RoleUserCreate",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Rol asignado correctamente",
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
            description: "Usuario o rol no encontrado/inactivo",
          },
          409: {
            description: "El rol ya está asignado al usuario",
          },
        },
      },
    },

    "/api/asignaciones-rol/{id}": {
      get: {
        tags: ["RoleUsers"],
        summary: "Obtener una asignación usuario-rol",
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
            description: "Asignación encontrada",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Asignación no encontrada",
          },
        },
      },
    },

    "/api/asignaciones-rol/{id}/deactivate": {
      patch: {
        tags: ["RoleUsers"],
        summary: "Retirar un rol de un usuario",
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
            description: "Asignación desactivada",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Asignación no encontrada",
          },
        },
      },
    },

    "/api/asignaciones-rol/{id}/reactivate": {
      patch: {
        tags: ["RoleUsers"],
        summary: "Reactivar una asignación usuario-rol",
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
            description: "Asignación reactivada",
          },
          401: {
            description: "No autenticado",
          },
          403: {
            description: "Sin permiso",
          },
          404: {
            description: "Asignación no encontrada",
          },
          409: {
            description: "La asignación ya está activa",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      RoleUser: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          user_id: {
            type: "integer",
            example: 2,
          },
          role_id: {
            type: "integer",
            example: 2,
          },
          status: {
            type: "string",
            enum: ["active", "inactive"],
            example: "active",
          },
          user: {
            type: "object",
            nullable: true,
            properties: {
              id: {
                type: "integer",
                example: 2,
              },
              username: {
                type: "string",
                example: "seller",
              },
              email: {
                type: "string",
                example: "seller@storelab.local",
              },
            },
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
        },
      },

      RoleUserCreate: {
        type: "object",
        required: ["user_id", "role_id"],
        properties: {
          user_id: {
            type: "integer",
            example: 2,
          },
          role_id: {
            type: "integer",
            example: 1,
          },
        },
      },
    },
  },
};
