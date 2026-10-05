import { Role } from "../roles/role.model";
import { Resource } from "../resources/resource.model";
import { RESOURCE_CATALOG } from "../resources/resource-catalog";
import { ResourceRolesService } from "./resource-roles.service";

export async function seedResourceRoles(): Promise<number> {
  const service = new ResourceRolesService();

  const admin = await Role.findOne({
    where: { name: "ADMIN" },
  });

  const seller = await Role.findOne({
    where: { name: "SELLER" },
  });

  if (!admin || !seller) {
    throw new Error("No se encontraron los roles ADMIN y SELLER");
  }

  const resources = await Resource.findAll({
    where: { status: "active" },
  });

  const resourceId = new Map(
    resources.map((resource) => [
      `${resource.method.toUpperCase()} ${resource.path}`,
      resource.id,
    ])
  );

  const adminResourceIds = resources.map(
    (resource) => resource.id
  );

  const sellerResourceIds = RESOURCE_CATALOG
    .filter((resource) => resource.seller === true)
    .map((resource) =>
      resourceId.get(
        `${resource.method.toUpperCase()} ${resource.path}`
      )
    )
    .filter((id): id is number => id !== undefined);

  await service.reconcileRole(
    admin.id,
    adminResourceIds
  );

  await service.reconcileRole(
    seller.id,
    sellerResourceIds
  );

  console.log(
    `✅ resource_roles: ADMIN=${adminResourceIds.length}, SELLER=${sellerResourceIds.length}`
  );

  return adminResourceIds.length + sellerResourceIds.length;
}
