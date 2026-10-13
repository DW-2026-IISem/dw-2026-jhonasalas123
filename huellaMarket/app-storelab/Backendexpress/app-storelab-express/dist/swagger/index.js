"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOpenApiDocument = buildOpenApiDocument;
exports.setupSwagger = setupSwagger;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_security_1 = require("../shared/http/swagger-security");
const client_swagger_1 = require("../features/business/client/client.swagger");
const pet_swagger_1 = require("../features/business/pet/pet.swagger");
const health_record_swagger_1 = require("../features/business/health-record/health-record.swagger");
const pet_service_openapi_1 = require("../features/business/pet-service/pet-service.openapi");
const service_appointment_swagger_1 = require("../features/business/service-appointment/service-appointment.swagger");
const product_swagger_1 = require("../features/business/product/product.swagger");
const provider_swagger_1 = require("../features/business/provider/provider.swagger");
const inventory_swagger_1 = require("../features/business/inventory/inventory.swagger");
const sale_swagger_1 = require("../features/business/sale/sale.swagger");
const sale_detail_swagger_1 = require("../features/business/sale-detail/sale-detail.swagger");
const payment_swagger_1 = require("../features/business/payment/payment.swagger");
const session_swagger_1 = require("../features/auth/session/session.swagger");
const refresh_tokens_swagger_1 = require("../features/auth/refresh-tokens/refresh-tokens.swagger");
const users_swagger_1 = require("../features/auth/users/users.swagger");
const roles_swagger_1 = require("../features/auth/roles/roles.swagger");
const resources_swagger_1 = require("../features/auth/resources/resources.swagger");
const role_users_swagger_1 = require("../features/auth/role-users/role-users.swagger");
const resource_roles_swagger_1 = require("../features/auth/resource-roles/resource-roles.swagger");
const HTTP_METHODS = new Set([
    "get",
    "post",
    "put",
    "patch",
    "delete",
    "options",
    "head",
]);
const OPEN_OPERATIONS = new Set([
    "post /api/sesion/login",
    "post /api/sesion/refresh",
    "post /api/sesion/logout",
]);
const featureSwaggerModules = [
    session_swagger_1.sessionSwagger,
    refresh_tokens_swagger_1.refreshTokensSwagger,
    users_swagger_1.usersSwagger,
    roles_swagger_1.rolesSwagger,
    resources_swagger_1.resourcesSwagger,
    role_users_swagger_1.roleUsersSwagger,
    resource_roles_swagger_1.resourceRolesSwagger,
    client_swagger_1.clientSwagger,
    pet_swagger_1.petSwagger,
    health_record_swagger_1.healthRecordSwagger,
    pet_service_openapi_1.petServiceOpenApi,
    service_appointment_swagger_1.serviceAppointmentSwagger,
    product_swagger_1.productSwagger,
    provider_swagger_1.providerSwagger,
    inventory_swagger_1.inventorySwagger,
    payment_swagger_1.paymentSwagger,
    sale_detail_swagger_1.saleDetailSwagger,
    sale_swagger_1.saleSwagger,
];
function applyAccessSecurity(paths) {
    for (const [path, operations] of Object.entries(paths)) {
        if (!operations || typeof operations !== "object")
            continue;
        for (const [method, operation] of Object.entries(operations)) {
            if (!HTTP_METHODS.has(method.toLowerCase()))
                continue;
            if (!operation || typeof operation !== "object")
                continue;
            const op = operation;
            const key = `${method.toLowerCase()} ${path}`;
            if (OPEN_OPERATIONS.has(key)) {
                op.security = [];
            }
            else {
                op.security = swagger_security_1.bearerSecurity;
            }
        }
    }
}
function buildOpenApiDocument() {
    const tags = [];
    const paths = {};
    const schemas = {};
    for (const mod of featureSwaggerModules) {
        tags.push(...mod.tags);
        Object.assign(paths, mod.paths);
        if (mod.components?.schemas) {
            Object.assign(schemas, mod.components.schemas);
        }
    }
    applyAccessSecurity(paths);
    return {
        openapi: "3.0.3",
        info: {
            title: "HuellaMarket API",
            version: "1.0.0",
            description: "API HuellaMarket (Express + Sequelize). Login/refresh/logout son OPEN; el resto exige JWT. Las operaciones de negocio y administración usan JWT + RBAC.",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 4000}`,
                description: "Local",
            },
        ],
        tags,
        paths,
        components: {
            securitySchemes: swagger_security_1.bearerSecurityScheme,
            schemas,
        },
    };
}
function setupSwagger(app) {
    const document = buildOpenApiDocument();
    app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(document));
    app.get("/api/docs.json", (_req, res) => {
        res.json(document);
    });
    console.log("📘 Swagger UI: /api/docs  |  OpenAPI JSON: /api/docs.json");
}
//# sourceMappingURL=index.js.map