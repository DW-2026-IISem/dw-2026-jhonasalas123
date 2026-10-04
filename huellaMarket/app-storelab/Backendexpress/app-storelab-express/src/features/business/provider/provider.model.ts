import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface ProviderI {
  id?: number;
  nit: string;
  razon_social: string;
  contacto?: string | null;
  telefono?: string | null;
  email?: string | null;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Provider
  extends Model<ProviderI>
  implements ProviderI
{
  public id!: number;
  public nit!: string;
  public razon_social!: string;
  public contacto!: string | null;
  public telefono!: string | null;
  public email!: string | null;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nit: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    razon_social: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    contacto: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(150),
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
    modelName: "Provider",
    tableName: "providers",
    timestamps: true,
  }
);
