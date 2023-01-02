import { DataTypes, Model } from "sequelize";
import db from '.'
import Order from "./order.model";
import Sponsor from "./sponsor.model";

class Offer extends Model {
  id!: number;
  tax!: string;
  tariff!: string;
  adValorem!: string;
  float!: string;
  iof!: string;
  expiresIn!: Date;
  paymentStatusSponsor: number;
  paymentStatusProvider:number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId: number | null;
  sponsorId: number | null;
}
Offer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tax: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tariff: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adValorem: {
    type: DataTypes.STRING,
    allowNull: false
  },
  float: {
    type: DataTypes.STRING,
    allowNull: false
  },
  iof: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paymentStatusSponsor: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  paymentStatusProvider: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  orderId: DataTypes.INTEGER.ZEROFILL,
  sponsorId: DataTypes.INTEGER.ZEROFILL,
 
},  {
  sequelize: db,
  modelName: 'offers',
  timestamps: false,
})

Offer.belongsTo(Order);
Offer.belongsTo(Sponsor);

export default Offer