"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedResourceRoles = seedResourceRoles;
const role_model_1 = require("../roles/role.model");
const resource_model_1 = require("../resources/resource.model");
const resource_catalog_1 = require("../resources/resource-catalog");
const resource_roles_service_1 = require("./resource-roles.service");
async function seedResourceRoles() {
    const service = new resource_roles_service_1.ResourceRolesService();
    const admin = await role_model_1.Role.findOne({
        where: { name: "ADMIN" },
    });
    const seller = await role_model_1.Role.findOne({
        where: { name: "SELLER" },
    });
    if (!admin || !seller) {
        throw new Error("No se encontraron los roles ADMIN y SELLER");
    }
    const resources = await resource_model_1.Resource.findAll({
        where: { status: "active" },
    });
    const resourceId = new Map(resources.map((resource) => [
        `${resource.method.toUpperCase()} ${resource.path}`,
        resource.id,
    ]));
    const adminResourceIds = resources.map((resource) => resource.id);
    const sellerResourceIds = resource_catalog_1.RESOURCE_CATALOG
        .filter((resource) => resource.seller === true)
        .map((resource) => resourceId.get(`${resource.method.toUpperCase()} ${resource.path}`))
        .filter((id) => id !== undefined);
    await service.reconcileRole(admin.id, adminResourceIds);
    await service.reconcileRole(seller.id, sellerResourceIds);
    console.log(`✅ resource_roles: ADMIN=${adminResourceIds.length}, SELLER=${sellerResourceIds.length}`);
    return adminResourceIds.length + sellerResourceIds.length;
}
//# sourceMappingURL=resource-roles.seeder.js.map