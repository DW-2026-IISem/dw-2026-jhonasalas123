import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface ServiceAppointmentI {
  id?: number;
  nombre: string;
  descripcion?: string | null;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ServiceAppointment
  extends Model<ServiceAppointmentI>
  implements ServiceAppointmentI
{
  public id!: number;
  public nombre!: string;
  public descripcion!: string | null;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ServiceAppointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

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
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "ServiceAppointment",
    tableName: "service_appointments",
    timestamps: true,
  }
);
