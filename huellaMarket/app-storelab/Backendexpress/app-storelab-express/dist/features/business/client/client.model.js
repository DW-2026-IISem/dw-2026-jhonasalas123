"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initClientModel = exports.Client = void 0;
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
}
exports.Client = Client;
const initClientModel = (sequelize) => {
    Client.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipo_documento: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        numero_documento: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        is_active: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        tableName: "clients",
        timestamps: true,
        underscored: true
    });
    return Client;
};
exports.initClientModel = initClientModel;
//# sourceMappingURL=client.model.js.map