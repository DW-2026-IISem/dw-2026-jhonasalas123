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

@Table({ tableName: 'sale_details' })
export class SaleDetailModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare cabecera_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare item_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare cantidad: number;

  @Column({
    type: DataType.DECIMAL(12, 2),
    allowNull: false,
  })
  declare valor_unitario: number;

  @Column({
    type: DataType.DECIMAL(12, 2),
    allowNull: false,
  })
  declare total: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  declare observaciones: string | null;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
