import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface PetServiceI {
  id?: number;
  nombre: string;
  descripcion?: string | null;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export class PetService extends Model {
  public id!: number;
  public nombre!: string;
  public descripcion!: string | null;
  public is_active!: boolean;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

PetService.init(
  {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
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
    modelName: "PetService",
    tableName: "pet_services",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
