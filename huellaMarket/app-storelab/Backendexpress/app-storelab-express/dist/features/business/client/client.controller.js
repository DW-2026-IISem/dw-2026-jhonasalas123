"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const client_model_1 = require("./client.model");
let ClientController = class ClientController {
    // ================== READ ==================
    async getAll() {
        const clients = await client_model_1.Client.findAll({
            where: { is_active: true },
            attributes: {
                exclude: ["password"],
            },
        });
        return { clients };
    }
    async getOne(id) {
        const client = await client_model_1.Client.findByPk(Number(id), {
            attributes: {
                exclude: ["password"],
            },
        });
        if (!client) {
            throw new common_1.NotFoundException("Client not found");
        }
        return { client };
    }
    // ================== CREATE ==================
    async create(body) {
        const client = await client_model_1.Client.create({
            tipo_documento: body.tipo_documento,
            numero_documento: body.numero_documento,
            nombre: body.nombre,
            telefono: body.telefono,
            email: body.email,
            is_active: true,
        });
        return { client };
    }
};
exports.ClientController = ClientController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "create", null);
exports.ClientController = ClientController = __decorate([
    (0, common_1.Controller)("api/clientes")
], ClientController);
//# sourceMappingURL=client.controller.js.map