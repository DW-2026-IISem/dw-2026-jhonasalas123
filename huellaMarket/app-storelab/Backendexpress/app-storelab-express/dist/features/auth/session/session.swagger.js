"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSwagger = void 0;
const swagger_security_1 = require("../../../shared/http/swagger-security");
/**
 * Documentación OpenAPI del feature Session.
 *
 * login / refresh / logout = OPEN
 * perfil / permisos = JWT
 */
exports.sessionSwagger = {
    tags: [
        {
            name: "Sesión",
            description: "Login, renovación, cierre y perfil",
        },
    ],
    paths: {
        "/api/sesion/login": {
            post: {
                tags: ["Sesión"],
                summary: "Iniciar sesión",
                description: "Valida usuario/correo y contraseña y genera access token y refresh token.",
                security: swagger_security_1.openSecurity,
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Par de tokens generado",
                    },
                    "400": {
                        description: "Faltan identifier o password",
                    },
                    "401": {
                        description: "Credenciales inválidas o usuario inactivo",
                    },
                },
            },
        },
        "/api/sesion/refresh": {
            post: {
                tags: ["Sesión"],
                summary: "Renovar access token",
                description: "Rota el refresh token y genera un nuevo par de tokens.",
                security: swagger_security_1.openSecurity,
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/RefreshToken",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Nuevo par de tokens",
                    },
                    "400": {
                        description: "Falta refresh_token",
                    },
                    "401": {
                        description: "Token inválido, expirado o reutilizado",
                    },
                },
            },
        },
        "/api/sesion/logout": {
            post: {
                tags: ["Sesión"],
                summary: "Cerrar sesión",
                description: "Revoca el refresh token presentado.",
                security: swagger_security_1.openSecurity,
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/RefreshToken",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Sesión cerrada",
                    },
                    "400": {
                        description: "Falta refresh_token",
                    },
                },
            },
        },
        "/api/sesion/perfil": {
            get: {
                tags: ["Sesión"],
                summary: "Perfil del usuario autenticado",
                description: "Devuelve los datos públicos del usuario autenticado.",
                security: swagger_security_1.bearerSecurity,
                responses: {
                    "200": {
                        description: "Perfil del usuario",
                    },
                    "401": swagger_security_1.unauthorizedResponse,
                },
            },
        },
        "/api/permisos": {
            get: {
                tags: ["Sesión"],
                summary: "Mis permisos efectivos",
                description: "Devuelve los permisos efectivos del usuario autenticado.",
                security: swagger_security_1.bearerSecurity,
                responses: {
                    "200": {
                        description: "Lista de permisos efectivos",
                    },
                    "401": swagger_security_1.unauthorizedResponse,
                },
            },
        },
    },
    components: {
        schemas: {
            Login: {
                type: "object",
                required: [
                    "identifier",
                    "password",
                ],
                properties: {
                    identifier: {
                        type: "string",
                        example: "admin",
                        description: "Nombre de usuario o correo",
                    },
                    password: {
                        type: "string",
                        format: "password",
                        example: "Admin123!",
                    },
                },
            },
            RefreshToken: {
                type: "object",
                required: ["refresh_token"],
                properties: {
                    refresh_token: {
                        type: "string",
                        example: "9f2c... (token opaco)",
                    },
                },
            },
            SessionTokens: {
                type: "object",
                properties: {
                    access_token: {
                        type: "string",
                        description: "JWT firmado",
                    },
                    token_type: {
                        type: "string",
                        example: "Bearer",
                    },
                    expires_in: {
                        type: "integer",
                        example: 900,
                    },
                    refresh_token: {
                        type: "string",
                        description: "Token opaco de sesión",
                    },
                    refresh_expires_in: {
                        type: "integer",
                        example: 604800,
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=session.swagger.js.map