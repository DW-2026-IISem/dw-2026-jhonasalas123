import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface SaleI {
  id?: number;
  cliente_id: number;
  fecha: Date;
  subtotal: number;
  impuestos: number;
  total: number;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Sale
  extends Model<SaleI>
  implements SaleI
{
  public id!: number;
  public cliente_id!: number;
  public fecha!: Date;
  public subtotal!: number;
  public impuestos!: number;
  public total!: number;
  public estado!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    impuestos: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    estado: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "pendiente",
    },
  },
  {
    sequelize,
    modelName: "Sale",
    tableName: "sales",
    timestamps: true,
  }
);
