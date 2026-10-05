"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUsersController = void 0;
const base_controller_1 = require("../../../shared/http/base-controller");
const role_users_service_1 = require("./role-users.service");
/**
 * Capa Controller del feature RoleUsers.
 *
 * Orden:
 * getAll → getOne → assign → deactivate → reactivate.
 *
 * No existe borrado físico porque la revocación es lógica.
 */
class RoleUsersController extends base_controller_1.BaseController {
    constructor(service = new role_users_service_1.RoleUsersService()) {
        super();
        this.service = service;
    }
    async getAll(_req, res) {
        await this.run(res, async () => {
            const assignments = await this.service.getAll();
            res.status(200).json({ assignments });
        });
    }
    async getOne(req, res) {
        await this.run(res, async () => {
            const assignment = await this.service.getOne(this.paramId(req));
            res.status(200).json({ assignment });
        });
    }
    async assign(req, res) {
        await this.run(res, async () => {
            const assignment = await this.service.assign(req.body);
            res.status(201).json({ assignment });
        });
    }
    async deactivate(req, res) {
        await this.run(res, async () => {
            const assignment = await this.service.deactivate(this.paramId(req));
            res.status(200).json({
                message: "Role assignment deactivated",
                assignment,
            });
        });
    }
    async reactivate(req, res) {
        await this.run(res, async () => {
            const assignment = await this.service.reactivate(this.paramId(req));
            res.status(200).json({
                message: "Role assignment reactivated",
                assignment,
            });
        });
    }
}
exports.RoleUsersController = RoleUsersController;
//# sourceMappingURL=role-users.controller.js.map