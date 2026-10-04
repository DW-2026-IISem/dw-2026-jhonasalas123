"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class Payment extends sequelize_1.Model {
}
exports.Payment = Payment;
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    referencia_tipo: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    referencia_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    metodo: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    monto: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        defaultValue: "pendiente",
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Payment",
    tableName: "payments",
    timestamps: true,
});
//# sourceMappingURL=payment.model.js.map