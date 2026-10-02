"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthRecord = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class HealthRecord extends sequelize_1.Model {
}
exports.HealthRecord = HealthRecord;
HealthRecord.init({
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
    modelName: "HealthRecord",
    tableName: "health_records",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
//# sourceMappingURL=health-record.model.js.map