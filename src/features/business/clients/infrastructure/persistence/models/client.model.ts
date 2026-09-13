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

@Table({ tableName: 'clients' })
export class ClientModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  declare tipoDocumento: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    unique: true,
  })
  declare numeroDocumento: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  declare nombre: string;

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
  declare isActive: boolean;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
