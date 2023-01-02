import { DataTypes, Model } from "sequelize";
import db from '.'

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber: string | null;
  mobile: string | null;
  departament: string | null;
  verificationCode: string | null;
  emailChecked: number | null;
  createdAt!: Date;
  updatedAt!: Date;
  cashforceAdm: number;
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  mobile: DataTypes.STRING,
  departament: DataTypes.STRING,
  verificationCode: DataTypes.STRING,
  emailChecked: DataTypes.TINYINT,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cashforceAdm:  DataTypes.TINYINT
},  {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
})


export default User;
