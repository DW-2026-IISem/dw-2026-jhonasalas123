"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedResources = seedResources;
const resource_model_1 = require("./resource.model");
const resource_catalog_1 = require("./resource-catalog");
/**
 * Seeder del catálogo de recursos (`resources`).
 *
 * A diferencia de los seeders de business, este no usa datos aleatorios:
 * los 58 recursos son un catálogo determinista definido en
 * `resource-catalog.ts`.
 */
async function seedResources() {
    let created = 0;
    for (const item of resource_catalog_1.RESOURCE_CATALOG) {
        const [resource, wasCreated] = await resource_model_1.Resource.findOrCreate({
            where: {
                method: item.method,
                path: item.path,
            },
            defaults: {
                method: item.method,
                path: item.path,
                description: item.description,
                status: "active",
            },
        });
        if (wasCreated) {
            created++;
            continue;
        }
        if (resource.status !== "active") {
            await resource.update({ status: "active" });
        }
    }
    console.log(`✅ resources: catálogo reconciliado (${resource_catalog_1.RESOURCE_CATALOG.length} recursos, ${created} nuevos)`);
    return created;
}
//# sourceMappingURL=resources.seeder.js.map