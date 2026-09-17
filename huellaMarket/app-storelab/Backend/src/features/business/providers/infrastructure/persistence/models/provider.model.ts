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

@Table({ tableName: 'providers' })
export class ProviderModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  declare nit: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  declare razon_social: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: true,
  })
  declare contacto: string | null;

  @Column({
    type: DataType.STRING(30),
    allowNull: true,
  })
  declare telefono: string | null;

  @Column({
    type: DataType.STRING(150),
    allowNull: true,
    unique: true,
  })
  declare email: string | null;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  declare is_active: boolean;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
