import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'payments' })
export class PaymentModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare referencia_tipo: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare referencia_id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare metodo: string;

  @Column({
    type: DataType.DECIMAL(12, 2),
    allowNull: false,
  })
  declare monto: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare fecha: Date;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    defaultValue: 'pendiente',
  })
  declare estado: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
