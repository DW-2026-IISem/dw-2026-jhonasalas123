import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface PetI {
  id?: number;
  nombre: string;
  descripcion: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Pet extends Model {
  public id!: number;
  public nombre!: string;
  public descripcion!: string;
  public isActive!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pet.init(
  {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Pet",
    tableName: "pets",
    timestamps: true,
  }
);
