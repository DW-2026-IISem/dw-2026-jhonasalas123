"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedResources = seedResources;
const resource_model_1 = require("./resource.model");
const resource_catalog_1 = require("./resource-catalog");
/**
 * Seeder del catálogo de recursos (`resources`).
 *
 * Idempotente: crea o reactiva lo que está en RESOURCE_CATALOG
 * y desactiva recursos huérfanos (p. ej. tipos-producto).
 */
async function seedResources() {
    let created = 0;
    const catalogKeys = new Set(resource_catalog_1.RESOURCE_CATALOG.map((item) => `${item.method.toUpperCase()} ${item.path}`));
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
        await resource.update({
            description: item.description,
            status: "active",
        });
    }
    const extras = await resource_model_1.Resource.findAll();
    let deactivated = 0;
    for (const resource of extras) {
        const key = `${resource.method.toUpperCase()} ${resource.path}`;
        if (!catalogKeys.has(key) && resource.status === "active") {
            await resource.update({ status: "inactive" });
            deactivated++;
        }
    }
    console.log(`✅ resources: catálogo reconciliado (${resource_catalog_1.RESOURCE_CATALOG.length} recursos, ${created} nuevos, ${deactivated} huérfanos inactivos)`);
    return created;
}
//# sourceMappingURL=resources.seeder.js.map