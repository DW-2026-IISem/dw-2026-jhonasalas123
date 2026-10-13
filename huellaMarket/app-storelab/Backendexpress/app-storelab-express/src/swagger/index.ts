import { Application } from "express";
import swaggerUi from "swagger-ui-express";

import { bearerSecurity, bearerSecurityScheme } from "../shared/http/swagger-security";

import { clientSwagger } from "../features/business/client/client.swagger";
import { petSwagger } from "../features/business/pet/pet.swagger";
import { healthRecordSwagger } from "../features/business/health-record/health-record.swagger";
import { petServiceOpenApi as petServiceSwagger } from "../features/business/pet-service/pet-service.openapi";
import { serviceAppointmentSwagger } from "../features/business/service-appointment/service-appointment.swagger";
import { productSwagger } from "../features/business/product/product.swagger";
import { providerSwagger } from "../features/business/provider/provider.swagger";
import { inventorySwagger } from "../features/business/inventory/inventory.swagger";
import { saleSwagger } from "../features/business/sale/sale.swagger";
import { saleDetailSwagger } from "../features/business/sale-detail/sale-detail.swagger";
import { paymentSwagger } from "../features/business/payment/payment.swagger";

import { sessionSwagger } from "../features/auth/session/session.swagger";
import { refreshTokensSwagger } from "../features/auth/refresh-tokens/refresh-tokens.swagger";
import { usersSwagger } from "../features/auth/users/users.swagger";
import { rolesSwagger } from "../features/auth/roles/roles.swagger";
import { resourcesSwagger } from "../features/auth/resources/resources.swagger";
import { roleUsersSwagger } from "../features/auth/role-users/role-users.swagger";
import { resourceRolesSwagger } from "../features/auth/resource-roles/resource-roles.swagger";

export type FeatureSwaggerModule = {
  tags: unknown[];
  paths: Record<string, unknown>;
  components?: { schemas?: Record<string, unknown> };
};

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

const featureSwaggerModules: FeatureSwaggerModule[] = [
  sessionSwagger,
  refreshTokensSwagger,
  usersSwagger,
  rolesSwagger,
  resourcesSwagger,
  roleUsersSwagger,
  resourceRolesSwagger,
  clientSwagger,
  petSwagger,
  healthRecordSwagger,
  petServiceSwagger,
  serviceAppointmentSwagger,
  productSwagger,
  providerSwagger,
  inventorySwagger,
  paymentSwagger,
  saleDetailSwagger,
  saleSwagger,
];

function applyAccessSecurity(paths: Record<string, unknown>): void {
  for (const [path, operations] of Object.entries(paths)) {
    if (!operations || typeof operations !== "object") continue;

    for (const [method, operation] of Object.entries(
      operations as Record<string, unknown>
    )) {
      if (!HTTP_METHODS.has(method.toLowerCase())) continue;
      if (!operation || typeof operation !== "object") continue;

      const op = operation as { security?: unknown };
      const key = `${method.toLowerCase()} ${path}`;

      if (OPEN_OPERATIONS.has(key)) {
        op.security = [];
      } else {
        op.security = bearerSecurity;
      }
    }
  }
}

export function buildOpenApiDocument() {
  const tags: unknown[] = [];
  const paths: Record<string, unknown> = {};
  const schemas: Record<string, unknown> = {};

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
      description:
        "API HuellaMarket (Express + Sequelize). Login/refresh/logout son OPEN; el resto exige JWT. Las operaciones de negocio y administración usan JWT + RBAC.",
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
      securitySchemes: bearerSecurityScheme,
      schemas,
    },
  };
}

export function setupSwagger(app: Application): void {
  const document = buildOpenApiDocument();

  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(document));

  app.get("/api/docs.json", (_req, res) => {
    res.json(document);
  });

  console.log(
    "📘 Swagger UI: /api/docs  |  OpenAPI JSON: /api/docs.json"
  );
}
