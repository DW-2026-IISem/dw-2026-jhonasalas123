"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesController = void 0;
const base_controller_1 = require("../../../shared/http/base-controller");
const resources_service_1 = require("./resources.service");
class ResourcesController extends base_controller_1.BaseController {
    constructor() {
        super(...arguments);
        this.service = new resources_service_1.ResourcesService();
    }
    async getAll(req, res) {
        await this.run(res, () => this.service.getAll());
    }
    async getOne(req, res) {
        const id = this.paramId(req);
        await this.run(res, () => this.service.getOne(id));
    }
    async create(req, res) {
        await this.run(res, () => this.service.create(req.body));
    }
    async updatePut(req, res) {
        const id = this.paramId(req);
        await this.run(res, () => this.service.updatePut(id, req.body));
    }
    async updatePatch(req, res) {
        const id = this.paramId(req);
        await this.run(res, () => this.service.updatePatch(id, req.body));
    }
    async delete(req, res) {
        const id = this.paramId(req);
        await this.run(res, () => this.service.deletePhysical(id));
    }
    async deactivate(req, res) {
        const id = this.paramId(req);
        await this.run(res, () => this.service.deleteLogical(id));
    }
}
exports.ResourcesController = ResourcesController;
//# sourceMappingURL=resources.controller.js.map