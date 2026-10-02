import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface HealthRecordI {
  id?: number;
  nombre: string;
  descripcion?: string | null;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export class HealthRecord extends Model {
  public id!: number;
  public nombre!: string;
  public descripcion!: string | null;
  public is_active!: boolean;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

HealthRecord.init(
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
    modelName: "HealthRecord",
    tableName: "health_records",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
