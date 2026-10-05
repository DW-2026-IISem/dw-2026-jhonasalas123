"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRolesService = void 0;
const dto_1 = require("./dto");
const resource_roles_repository_1 = require("./resource-roles.repository");
const roles_repository_1 = require("../roles/roles.repository");
const resources_repository_1 = require("../resources/resources.repository");
const app_error_1 = require("../../../shared/errors/app-error");
const with_transaction_1 = require("../../../shared/database/with-transaction");
/**
 * Capa Service del feature ResourceRoles.
 *
 * Role + Resource = permiso.
 */
class ResourceRolesService {
    constructor(repository = new resource_roles_repository_1.ResourceRolesRepository(), rolesRepository = new roles_repository_1.RolesRepository(), resourcesRepository = new resources_repository_1.ResourcesRepository()) {
        this.repository = repository;
        this.rolesRepository = rolesRepository;
        this.resourcesRepository = resourcesRepository;
    }
    // ================== READ ==================
    async getAll(filters = {}) {
        const grants = await this.repository.findAllActiveFiltered({
            role_id: filters.role_id,
            resource_id: filters.resource_id,
        });
        return grants.map((grant) => (0, dto_1.toResourceRoleResponse)(grant));
    }
    async getOne(id) {
        return (0, dto_1.toResourceRoleResponse)(await this.findOrFail(id));
    }
    /** Permisos efectivos de un usuario. */
    async findEffectiveForUser(userId) {
        return this.repository.findEffectiveForUser(userId);
    }
    // ================== CREATE ==================
    /** Concede un recurso a un rol. */
    async grant(body) {
        if (!body.role_id || !body.resource_id) {
            throw new app_error_1.AppError(400, "role_id and resource_id are required");
        }
        const role = await this.rolesRepository.findById(body.role_id);
        if (!role || role.status !== "active") {
            throw new app_error_1.AppError(404, "Role not found or inactive");
        }
        const resource = await this.resourcesRepository.findById(body.resource_id);
        if (!resource || resource.status !== "active") {
            throw new app_error_1.AppError(404, "Resource not found or inactive");
        }
        const existing = await this.repository.findByRoleAndResource(body.role_id, body.resource_id);
        if (existing) {
            if (existing.status === "active") {
                throw new app_error_1.AppError(409, "Role already has this resource granted");
            }
            const reactivated = await this.repository.update(existing, {
                status: "active",
            });
            return (0, dto_1.toResourceRoleResponse)(await this.reload(reactivated.id));
        }
        const created = await this.repository.create({
            role_id: body.role_id,
            resource_id: body.resource_id,
            status: "active",
        });
        return (0, dto_1.toResourceRoleResponse)(await this.reload(created.id));
    }
    // ================== STATE ==================
    /** Retira un permiso mediante borrado lógico. */
    async deactivate(id) {
        const grant = await this.findOrFail(id);
        await this.repository.update(grant, {
            status: "inactive",
        });
        return (0, dto_1.toResourceRoleResponse)(await this.reload(grant.id));
    }
    /** Reactiva una concesión. */
    async reactivate(id) {
        const grant = await this.findOrFail(id, false);
        if (grant.status === "active") {
            throw new app_error_1.AppError(409, "Grant is already active");
        }
        await this.repository.update(grant, {
            status: "active",
        });
        return (0, dto_1.toResourceRoleResponse)(await this.reload(grant.id));
    }
    // ================== RECONCILIACIÓN ==================
    /**
     * Deja las concesiones de un rol exactamente en resourceIds.
     *
     * - Falta → crea.
     * - Inactiva → reactiva.
     * - Activa y está en la lista → conserva.
     * - Activa y no está en la lista → desactiva.
     */
    async reconcileRole(roleId, resourceIds) {
        const role = await this.rolesRepository.findById(roleId);
        if (!role) {
            throw new app_error_1.AppError(404, "Role not found");
        }
        const wanted = new Set(resourceIds);
        return (0, with_transaction_1.withTransaction)(async (t) => {
            const existing = await this.repository.findAllByRole(roleId, t);
            const byResource = new Map(existing.map((row) => [
                row.resource_id,
                row,
            ]));
            let activated = 0;
            let deactivated = 0;
            for (const resourceId of wanted) {
                const row = byResource.get(resourceId);
                if (!row) {
                    await this.repository.create({
                        role_id: roleId,
                        resource_id: resourceId,
                        status: "active",
                    }, t);
                    activated++;
                    continue;
                }
                if (row.status !== "active") {
                    await this.repository.update(row, { status: "active" }, t);
                    activated++;
                }
            }
            for (const row of existing) {
                if (wanted.has(row.resource_id)) {
                    continue;
                }
                if (row.status === "active") {
                    await this.repository.update(row, { status: "inactive" }, t);
                    deactivated++;
                }
            }
            return {
                role_id: roleId,
                activated,
                deactivated,
                total_active: wanted.size,
            };
        });
    }
    // ================== HELPERS ==================
    async findOrFail(id, onlyActive = true) {
        const grant = await this.repository.findById(id);
        if (!grant ||
            (onlyActive && grant.status !== "active")) {
            throw new app_error_1.AppError(404, "Grant not found");
        }
        return grant;
    }
    async reload(id) {
        const grant = await this.repository.findById(id);
        if (!grant) {
            throw new app_error_1.AppError(404, "Grant not found");
        }
        return grant;
    }
}
exports.ResourceRolesService = ResourceRolesService;
//# sourceMappingURL=resource-roles.service.js.map