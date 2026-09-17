import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'inventory' })
export class InventoryModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare ubicacion_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare item_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  declare cantidad: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  declare stock_minimo: number;

  @UpdatedAt
  declare updated_at: Date;
}
