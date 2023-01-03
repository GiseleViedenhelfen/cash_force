import { DataTypes, Model } from "sequelize";
import db from '.'
import Cnpj from "./cnpj.model";

class Provider extends Model {
  id!: number;
  name!: string;
  tradingName: string | null;
  responsibleName: string | null;
  responsibleEmail: string | null;
  responsiblePosition: string | null;
  responsiblePhone: string | null;
  responsibleMobile: string | null;
  website: string | null;
  postalCode: string | null;
  address: string | null;
  number: string | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  bank: string | null;
  bankAgency: string | null;
  account: string | null;
  documents: string | null;
  phoneNumber: string | null;
  situation: string | null;
  situationDate: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId: number | null;
  email: string | null;
}
Provider.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tradingName: DataTypes.STRING,
  cashforceTax: DataTypes.STRING,
  responsibleName: DataTypes.STRING,
  responsibleEmail: DataTypes.STRING,
  responsiblePosition: DataTypes.STRING,
  responsiblePhone: DataTypes.STRING,
  responsibleMobile: DataTypes.STRING,
  website: DataTypes.STRING,
  postalCode: DataTypes.STRING,
  address: DataTypes.STRING,
  number: DataTypes.STRING,
  complement: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  bank: DataTypes.STRING,
  bankAgency: DataTypes.STRING,
  account: DataTypes.STRING,
  documents: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cnpjId: DataTypes.NUMBER.ZEROFILL,
  email: DataTypes.STRING,
},  {
  sequelize: db,
  modelName: 'providers',
  timestamps: false,
})

Provider.belongsTo(Cnpj);

export default Provider;
