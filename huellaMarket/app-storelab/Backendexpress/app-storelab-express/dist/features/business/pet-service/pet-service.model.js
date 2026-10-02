"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetService = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class PetService extends sequelize_1.Model {
}
exports.PetService = PetService;
PetService.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "PetService",
    tableName: "pet_services",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
//# sourceMappingURL=pet-service.model.js.map