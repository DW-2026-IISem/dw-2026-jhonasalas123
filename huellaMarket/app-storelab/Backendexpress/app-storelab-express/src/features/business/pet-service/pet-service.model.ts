import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface PetServiceI {
  id?: number;
  nombre: string;
  descripcion?: string | null;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class PetService extends Model implements PetServiceI {
  public id!: number;
  public nombre!: string;
  public descripcion!: string | null;
  public isActive!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PetService.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(150),
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
    modelName: "PetService",
    tableName: "pet_services",
    timestamps: true,
  }
);
