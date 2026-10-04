import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface SaleDetailI {
  id?: number;
  cabecera_id: number;
  item_id: number;
  cantidad: number;
  valor_unitario: number;
  total: number;
  observaciones?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SaleDetail
  extends Model<SaleDetailI>
  implements SaleDetailI
{
  public id!: number;
  public cabecera_id!: number;
  public item_id!: number;
  public cantidad!: number;
  public valor_unitario!: number;
  public total!: number;
  public observaciones!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

SaleDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cabecera_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    valor_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "SaleDetail",
    tableName: "sale_details",
    timestamps: true,
  }
);
