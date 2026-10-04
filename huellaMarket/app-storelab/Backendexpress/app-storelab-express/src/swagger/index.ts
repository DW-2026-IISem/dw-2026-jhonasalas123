import { Application } from "express";
import swaggerUi from "swagger-ui-express";

import { clientSwagger } from "../features/business/client/client.swagger";
import { petSwagger } from "../features/business/pet/pet.swagger";
import { healthRecordSwagger } from "../features/business/health-record/health-record.swagger";
import { serviceAppointmentSwagger } from "../features/business/service-appointment/service-appointment.swagger";
import { productSwagger } from "../features/business/product/product.swagger";

export type FeatureSwaggerModule = {
  tags: unknown[];
  paths: Record<string, unknown>;
  components?: { schemas?: Record<string, unknown> };
};

/**
 * Registry externo: importa la documentación OpenAPI de cada feature.
 */
const featureSwaggerModules: FeatureSwaggerModule[] = [
  clientSwagger,
  petSwagger,
  healthRecordSwagger,
  serviceAppointmentSwagger,
  productSwagger,
];

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

  return {
    openapi: "3.0.3",
    info: {
      title: "HuellaMarket API",
      version: "1.0.0",
      description:
        "API HuellaMarket (NestJS + Sequelize). Los endpoints documentados están configurados como SIN AUTH.",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 4000}`,
        description: "Local",
      },
    ],
    tags,
    paths,
    components: { schemas },
  };
}

/** Monta Swagger UI y el JSON OpenAPI */
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
