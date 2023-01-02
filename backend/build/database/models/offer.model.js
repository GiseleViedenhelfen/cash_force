"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const order_model_1 = require("./order.model");
const sponsor_model_1 = require("./sponsor.model");
class Offer extends sequelize_1.Model {
}
Offer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tax: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tariff: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    adValorem: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    float: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    iof: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    expiresIn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    paymentStatusSponsor: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 0
    },
    paymentStatusProvider: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 0
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    orderId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    sponsorId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
}, {
    sequelize: _1.default,
    modelName: 'offers',
    timestamps: false,
});
Offer.belongsTo(order_model_1.default);
Offer.belongsTo(sponsor_model_1.default);
exports.default = Offer;
//# sourceMappingURL=offer.model.js.map