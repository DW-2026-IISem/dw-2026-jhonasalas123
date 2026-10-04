"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class Provider extends sequelize_1.Model {
}
exports.Provider = Provider;
Provider.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nit: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    razon_social: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    contacto: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Provider",
    tableName: "providers",
    timestamps: true,
});
//# sourceMappingURL=provider.model.js.map