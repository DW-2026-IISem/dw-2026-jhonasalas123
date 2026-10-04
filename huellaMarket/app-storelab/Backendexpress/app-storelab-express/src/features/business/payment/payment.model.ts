import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";

export interface PaymentI {
  id?: number;
  referencia_tipo: string;
  referencia_id: number;
  metodo: string;
  monto: number;
  fecha: Date;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Payment
  extends Model<PaymentI>
  implements PaymentI
{
  public id!: number;
  public referencia_tipo!: string;
  public referencia_id!: number;
  public metodo!: string;
  public monto!: number;
  public fecha!: Date;
  public estado!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    referencia_tipo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    referencia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    metodo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    monto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "pendiente",
    },
  },
  {
    sequelize,
    modelName: "Payment",
    tableName: "payments",
    timestamps: true,
  }
);
