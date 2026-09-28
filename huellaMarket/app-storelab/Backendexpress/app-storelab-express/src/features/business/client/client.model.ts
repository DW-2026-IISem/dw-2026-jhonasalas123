import { Model, DataTypes, Sequelize } from "sequelize";
import bcrypt from "bcrypt";

export class Client extends Model {
  declare id: number;
  declare tipo_documento: string;
  declare numero_documento: string;
  declare nombre: string;
  declare telefono: string;
  declare email: string;
  declare is_active: boolean;
  declare created_at: Date;
  declare updated_at: Date;
}

export const initClientModel = (sequelize: Sequelize) => {
  Client.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero_documento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      sequelize,
      tableName: "clients",
      timestamps: true,
      underscored: true
    }
  );

  return Client;
};
