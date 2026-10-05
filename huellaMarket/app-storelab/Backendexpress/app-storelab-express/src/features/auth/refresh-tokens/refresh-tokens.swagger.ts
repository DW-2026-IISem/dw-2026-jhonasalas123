import {
  bearerSecurity,
  invalidIdResponse,
  unauthorizedResponse,
} from "../../../shared/http/swagger-security";

/**
 * Documentación OpenAPI del feature RefreshTokens.
 *
 * Modalidad JWT sin RBAC.
 */
export const refreshTokensSwagger = {
  tags: [
    {
      name: "Sesiones",
      description:
        "Sesiones persistidas del usuario autenticado",
    },
  ],

  paths: {
    "/api/sesiones": {
      get: {
        tags: ["Sesiones"],
        summary: "Listar mis sesiones activas",
        description:
          "JWT — devuelve las sesiones del usuario autenticado. token_hash nunca se expone.",
        security: bearerSecurity,
        responses: {
          "200": {
            description:
              "Sesiones propias",
          },
          "401": unauthorizedResponse,
        },
      },

      delete: {
        tags: ["Sesiones"],
        summary:
          "Purgar mis sesiones revocadas/expiradas",
        description:
          "JWT — borrado físico de las sesiones propias ya inútiles.",
        security: bearerSecurity,
        responses: {
          "200": {
            description:
              "Purga realizada",
          },
          "401": unauthorizedResponse,
        },
      },
    },

    "/api/sesiones/deactivate-all": {
      patch: {
        tags: ["Sesiones"],
        summary:
          "Revocar todas mis sesiones",
        description:
          "JWT — revoca todas las sesiones propias.",
        security: bearerSecurity,
        responses: {
          "200": {
            description:
              "Sesiones revocadas",
          },
          "401": unauthorizedResponse,
        },
      },
    },

    "/api/sesiones/{id}": {
      get: {
        tags: ["Sesiones"],
        summary:
          "Consultar una sesión propia",
        description:
          "JWT — devuelve información de una sesión propia.",
        security: bearerSecurity,
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
            description: "Sesión encontrada",
          },
          "400": invalidIdResponse,
          "401": unauthorizedResponse,
          "404": {
            description:
              "No encontrada o no pertenece al usuario",
          },
        },
      },
    },

    "/api/sesiones/{id}/deactivate": {
      patch: {
        tags: ["Sesiones"],
        summary:
          "Revocar una sesión propia",
        description:
          "JWT — revocación lógica de una sesión concreta.",
        security: bearerSecurity,
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
            description: "Sesión revocada",
          },
          "400": invalidIdResponse,
          "401": unauthorizedResponse,
          "404": {
            description:
              "No encontrada o no pertenece al usuario",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Session: {
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
          family_id: {
            type: "string",
            format: "uuid",
          },
          device_info: {
            type: "string",
            nullable: true,
            example: "Mozilla/5.0 ...",
          },
          expires_at: {
            type: "string",
            format: "date-time",
          },
          status: {
            type: "string",
            enum: ["active", "inactive"],
            example: "active",
          },
          is_expired: {
            type: "boolean",
            example: false,
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
    },
  },
};
