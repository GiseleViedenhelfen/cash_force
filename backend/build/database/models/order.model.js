"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const cnpj_model_1 = require("./cnpj.model");
const user_model_1 = require("./user.model");
const buyer_model_1 = require("./buyer.model");
const provider_model_1 = require("./provider.model");
class Order extends sequelize_1.Model {
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderNfId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    orderNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    orderPath: sequelize_1.DataTypes.STRING,
    orderFileName: sequelize_1.DataTypes.STRING,
    orderOriginalName: sequelize_1.DataTypes.STRING,
    emissionDate: sequelize_1.DataTypes.STRING,
    pdfFile: sequelize_1.DataTypes.STRING,
    emitedTo: sequelize_1.DataTypes.STRING,
    nNF: sequelize_1.DataTypes.STRING,
    CTE: sequelize_1.DataTypes.STRING,
    value: sequelize_1.DataTypes.STRING,
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    cnpjId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    userId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    buyerId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    providerId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    orderStatusBuyer: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: '0',
    },
    orderStatusProvider: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: '0',
    },
    deliveryReceipt: sequelize_1.DataTypes.STRING,
    cargoPackingList: sequelize_1.DataTypes.STRING,
    deliveryCtrc: sequelize_1.DataTypes.STRING,
}, {
    sequelize: _1.default,
    modelName: 'orders',
    timestamps: false,
});
Order.belongsTo(cnpj_model_1.default);
Order.belongsTo(user_model_1.default);
Order.belongsTo(buyer_model_1.default);
Order.belongsTo(provider_model_1.default);
exports.default = Order;
//# sourceMappingURL=order.model.js.map