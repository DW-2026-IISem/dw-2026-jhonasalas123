"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../../database/db");
class Pet extends sequelize_1.Model {
}
exports.Pet = Pet;
Pet.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
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
    modelName: "Pet",
    tableName: "pets",
    timestamps: true,
});
//# sourceMappingURL=pet.model.js.map