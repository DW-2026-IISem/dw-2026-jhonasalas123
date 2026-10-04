import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface InventoryI {
  id?: number;
  ubicacion_id: number;
  item_id: number;
  cantidad: number;
  stock_minimo: number;
  updatedAt?: Date;
}

export class Inventory
  extends Model<InventoryI>
  implements InventoryI
{
  public id!: number;
  public ubicacion_id!: number;
  public item_id!: number;
  public cantidad!: number;
  public stock_minimo!: number;
  public updatedAt!: Date;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ubicacion_id: {
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
      defaultValue: 0,
    },
    stock_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Inventory",
    tableName: "inventory",
    timestamps: true,
    createdAt: false,
    updatedAt: "updatedAt",
  }
);
