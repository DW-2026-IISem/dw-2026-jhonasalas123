"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesRepository = void 0;
const resource_model_1 = require("./resource.model");
class ResourcesRepository {
    async findAllActive() {
        return resource_model_1.Resource.findAll({
            where: { status: "active" },
        });
    }
    async findById(id, transaction) {
        return resource_model_1.Resource.findByPk(id, { transaction });
    }
    async findByMethodAndPath(method, path) {
        return resource_model_1.Resource.findOne({
            where: {
                method,
                path,
            },
        });
    }
    async create(data) {
        return resource_model_1.Resource.create(data);
    }
    async update(resource, data) {
        return resource.update(data);
    }
    async delete(resource) {
        await resource.destroy();
    }
}
exports.ResourcesRepository = ResourcesRepository;
//# sourceMappingURL=resources.repository.js.map