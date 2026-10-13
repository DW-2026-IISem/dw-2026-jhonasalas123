import { Resource } from "./resource.model";
import { RESOURCE_CATALOG } from "./resource-catalog";

/**
 * Seeder del catálogo de recursos (`resources`).
 *
 * Idempotente: crea o reactiva lo que está en RESOURCE_CATALOG
 * y desactiva recursos huérfanos (p. ej. tipos-producto).
 */
export async function seedResources(): Promise<number> {
  let created = 0;
  const catalogKeys = new Set(
    RESOURCE_CATALOG.map(
      (item) => `${item.method.toUpperCase()} ${item.path}`
    )
  );

  for (const item of RESOURCE_CATALOG) {
    const [resource, wasCreated] = await Resource.findOrCreate({
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

  const extras = await Resource.findAll();
  let deactivated = 0;

  for (const resource of extras) {
    const key = `${resource.method.toUpperCase()} ${resource.path}`;
    if (!catalogKeys.has(key) && resource.status === "active") {
      await resource.update({ status: "inactive" });
      deactivated++;
    }
  }

  console.log(
    `✅ resources: catálogo reconciliado (${RESOURCE_CATALOG.length} recursos, ${created} nuevos, ${deactivated} huérfanos inactivos)`
  );

  return created;
}
