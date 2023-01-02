import { DataTypes, Model } from "sequelize";
import db from '.'
import Buyer from "./buyer.model";
import Sponsor from "./sponsor.model";
import Provider from "./provider.model";
import Order from "./order.model";

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