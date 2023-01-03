import { DataTypes, Model } from "sequelize";
import db from '.'

class Cnpj extends Model {
  id!: number;
  cnpj!: string;
  companyType!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
Cnpj.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false},
 
},  {
  sequelize: db,
  modelName: 'cnpjs',
  timestamps: false,
})


export default Cnpj