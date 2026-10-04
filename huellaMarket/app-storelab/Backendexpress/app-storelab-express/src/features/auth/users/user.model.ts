import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../database/db";
import { hashPassword } from "../../../shared/auth/password";

export interface UserI {
  id?: number;
  username: string;
  email: string;
  password: string;
  avatar?: string | null;
  status: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;
}

export class User extends Model<UserI> implements UserI {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare avatar: string | null;
  declare status: "active" | "inactive";
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: "uq_users_username",
      validate: {
        notEmpty: true,
        len: [3, 80],
      },
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "uq_users_email",
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatar: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "inactive",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        user.password = await hashPassword(user.password);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          user.password = await hashPassword(user.password);
        }
      },
      beforeBulkCreate: async (users) => {
        for (const user of users) {
          user.password = await hashPassword(user.password);
        }
      },
      beforeValidate: (user) => {
        if (user.username) {
          user.username = user.username.trim().toLowerCase();
        }
        if (user.email) {
          user.email = user.email.trim().toLowerCase();
        }
      },
    },
  }
);
