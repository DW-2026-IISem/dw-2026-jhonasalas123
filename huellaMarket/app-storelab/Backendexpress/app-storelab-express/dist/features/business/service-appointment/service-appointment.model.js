"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAppointment = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class ServiceAppointment extends sequelize_1.Model {
}
exports.ServiceAppointment = ServiceAppointment;
ServiceAppointment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "ServiceAppointment",
    tableName: "service_appointments",
    timestamps: true,
});
//# sourceMappingURL=service-appointment.model.js.map