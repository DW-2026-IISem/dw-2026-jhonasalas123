import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface PetI {
  id?: number;
  name: string;
  description: string;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Pet extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public is_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pet.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_active: {
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
