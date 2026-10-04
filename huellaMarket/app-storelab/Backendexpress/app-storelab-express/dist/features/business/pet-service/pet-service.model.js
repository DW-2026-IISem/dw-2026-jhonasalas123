"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetService = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class PetService extends sequelize_1.Model {
}
exports.PetService = PetService;
PetService.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "PetService",
    tableName: "pet_services",
    timestamps: true,
});
//# sourceMappingURL=pet-service.model.js.map