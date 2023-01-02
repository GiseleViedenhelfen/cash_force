import { DataTypes, Model } from "sequelize";
import db from '.'
import Order from "./order.model";

class OrderPortion extends Model {
  id!: number;
  nDup!: string;
  dVenc!: string;
  vDup!: string;
  availableToMarket: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId: number | null;
}
OrderPortion.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nDup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dVenc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vDup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  availableToMarket: {
    type: DataTypes.DATE,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  orderId: DataTypes.INTEGER.ZEROFILL,
 
},  {
  sequelize: db,
  modelName: 'orderPortion',
  timestamps: false,
})

OrderPortion.belongsTo(Order);

export default OrderPortion