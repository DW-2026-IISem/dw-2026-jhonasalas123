"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOpenApiDocument = buildOpenApiDocument;
exports.setupSwagger = setupSwagger;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const client_swagger_1 = require("../features/business/client/client.swagger");
const pet_swagger_1 = require("../features/business/pet/pet.swagger");
/**
 * Registry externo: importa la documentación OpenAPI de cada feature.
 */
const featureSwaggerModules = [
    client_swagger_1.clientSwagger,
    pet_swagger_1.petSwagger,
];
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
    return {
        openapi: "3.0.3",
        info: {
            title: "HuellaMarket API",
            version: "1.0.0",
            description: "API HuellaMarket (NestJS + Sequelize). Los endpoints documentados están configurados como SIN AUTH.",
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
function setupSwagger(app) {
    const document = buildOpenApiDocument();
    app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(document));
    app.get("/api/docs.json", (_req, res) => {
        res.json(document);
    });
    console.log("📘 Swagger UI: /api/docs  |  OpenAPI JSON: /api/docs.json");
}
//# sourceMappingURL=index.js.map