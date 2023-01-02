"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const order_model_1 = require("./order.model");
class OrderPortion extends sequelize_1.Model {
}
OrderPortion.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nDup: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dVenc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    vDup: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    availableToMarket: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    orderId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
}, {
    sequelize: _1.default,
    modelName: 'orderPortion',
    timestamps: false,
});
OrderPortion.belongsTo(order_model_1.default);
exports.default = OrderPortion;
//# sourceMappingURL=orderPortion.model.js.map