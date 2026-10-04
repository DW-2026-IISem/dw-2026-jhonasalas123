"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetail = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class SaleDetail extends sequelize_1.Model {
}
exports.SaleDetail = SaleDetail;
SaleDetail.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cabecera_id: {
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
        defaultValue: 1,
    },
    valor_unitario: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    total: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    observaciones: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "SaleDetail",
    tableName: "sale_details",
    timestamps: true,
});
//# sourceMappingURL=sale-detail.model.js.map