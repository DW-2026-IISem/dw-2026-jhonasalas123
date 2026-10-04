"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class Inventory extends sequelize_1.Model {
}
exports.Inventory = Inventory;
Inventory.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ubicacion_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    stock_minimo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Inventory",
    tableName: "inventory",
    timestamps: true,
    createdAt: false,
    updatedAt: "updatedAt",
});
//# sourceMappingURL=inventory.model.js.map