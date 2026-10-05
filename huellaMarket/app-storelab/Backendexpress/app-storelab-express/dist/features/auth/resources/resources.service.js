"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesService = void 0;
const app_error_1 = require("../../../shared/errors/app-error");
const resources_repository_1 = require("./resources.repository");
const dto_1 = require("./dto");
class ResourcesService {
    constructor() {
        this.repository = new resources_repository_1.ResourcesRepository();
    }
    async getAll() {
        const resources = await this.repository.findAllActive();
        return resources.map(dto_1.toResourceResponse);
    }
    async getOne(id) {
        const resource = await this.repository.findById(id);
        if (!resource || resource.status !== "active") {
            throw new app_error_1.AppError(404, "Recurso no encontrado");
        }
        return (0, dto_1.toResourceResponse)(resource);
    }
    async create(data) {
        const method = data.method.trim().toUpperCase();
        const path = data.path.trim();
        const existing = await this.repository.findByMethodAndPath(method, path);
        if (existing) {
            throw new app_error_1.AppError(409, "Ya existe un recurso con ese método y path");
        }
        const resource = await this.repository.create({
            method,
            path,
            description: data.description ?? null,
            status: data.status ?? "active",
        });
        return (0, dto_1.toResourceResponse)(resource);
    }
    async updatePut(id, data) {
        const resource = await this.repository.findById(id);
        if (!resource) {
            throw new app_error_1.AppError(404, "Recurso no encontrado");
        }
        const method = data.method.trim().toUpperCase();
        const path = data.path.trim();
        const existing = await this.repository.findByMethodAndPath(method, path);
        if (existing && existing.id !== id) {
            throw new app_error_1.AppError(409, "Ya existe un recurso con ese método y path");
        }
        await this.repository.update(resource, {
            method,
            path,
            description: data.description ?? null,
        });
        return (0, dto_1.toResourceResponse)(resource);
    }
    async updatePatch(id, data) {
        const resource = await this.repository.findById(id);
        if (!resource) {
            throw new app_error_1.AppError(404, "Recurso no encontrado");
        }
        const nextMethod = data.method
            ? data.method.trim().toUpperCase()
            : resource.method;
        const nextPath = data.path
            ? data.path.trim()
            : resource.path;
        const existing = await this.repository.findByMethodAndPath(nextMethod, nextPath);
        if (existing && existing.id !== id) {
            throw new app_error_1.AppError(409, "Ya existe un recurso con ese método y path");
        }
        await this.repository.update(resource, {
            ...(data.method !== undefined ? { method: nextMethod } : {}),
            ...(data.path !== undefined ? { path: nextPath } : {}),
            ...(data.description !== undefined
                ? { description: data.description }
                : {}),
        });
        return (0, dto_1.toResourceResponse)(resource);
    }
    async deletePhysical(id) {
        const resource = await this.repository.findById(id);
        if (!resource) {
            throw new app_error_1.AppError(404, "Recurso no encontrado");
        }
        await this.repository.delete(resource);
    }
    async deleteLogical(id) {
        const resource = await this.repository.findById(id);
        if (!resource) {
            throw new app_error_1.AppError(404, "Recurso no encontrado");
        }
        await this.repository.update(resource, {
            status: "inactive",
        });
        return (0, dto_1.toResourceResponse)(resource);
    }
}
exports.ResourcesService = ResourcesService;
//# sourceMappingURL=resources.service.js.map