import { DataTypes, Model } from "sequelize";
import db from '.';
import Cnpj from "./cnpj.model";
import User from "./user.model";
import Buyer from "./buyer.model";
import Provider from "./provider.model";

class Order extends Model {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath: string | null;
  orderFileName: string | null;
  orderOriginalName: string | null;
  emissionDate: string | null;
  pdfFile: string | null;
  emitedTo: string | null;
  nNF: string | null;
  CTE: string | null;
  value: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId: number | null;
  userId: number | null;
  buyerId: number | null;
  providerId: number | null;
  orderStatusBuyer: string;
  orderStatusProvider: string;
  deliveryReceipt: string | null;
  cargoPackingList: string | null;
  deliveryCtrc: string | null;
}
Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderPath: DataTypes.STRING,
  orderFileName: DataTypes.STRING,
  orderOriginalName: DataTypes.STRING, 
  emissionDate: DataTypes.STRING, 
  pdfFile: DataTypes.STRING, 
  emitedTo: DataTypes.STRING,
  nNF: DataTypes.STRING,
  CTE: DataTypes.STRING,
  value: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cnpjId: DataTypes.INTEGER.ZEROFILL,
  userId: DataTypes.INTEGER.ZEROFILL,
  buyerId: DataTypes.INTEGER.ZEROFILL,
  providerId: DataTypes.INTEGER.ZEROFILL,
  orderStatusBuyer: {
    type: DataTypes.STRING,
    defaultValue: '0',
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    defaultValue: '0',
  },
  deliveryReceipt: DataTypes.STRING,
  cargoPackingList: DataTypes.STRING,
  deliveryCtrc: DataTypes.STRING,
},  {
  sequelize: db,
  modelName: 'orders',
  timestamps: false,
})

Order.belongsTo(Cnpj);
Order.belongsTo(User);
Order.belongsTo(Buyer);
Order.belongsTo(Provider);

export default Order;