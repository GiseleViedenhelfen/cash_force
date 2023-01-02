"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const cnpj_model_1 = require("./cnpj.model");
class Buyer extends sequelize_1.Model {
}
Buyer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tradingName: sequelize_1.DataTypes.STRING,
    cashforceTax: sequelize_1.DataTypes.STRING,
    responsibleName: sequelize_1.DataTypes.STRING,
    responsibleEmail: sequelize_1.DataTypes.STRING,
    responsiblePosition: sequelize_1.DataTypes.STRING,
    responsiblePhone: sequelize_1.DataTypes.STRING,
    responsibleMobile: sequelize_1.DataTypes.STRING,
    website: sequelize_1.DataTypes.STRING,
    postalCode: sequelize_1.DataTypes.STRING,
    address: sequelize_1.DataTypes.STRING,
    number: sequelize_1.DataTypes.STRING,
    complement: sequelize_1.DataTypes.STRING,
    neighborhood: sequelize_1.DataTypes.STRING,
    city: sequelize_1.DataTypes.STRING,
    state: sequelize_1.DataTypes.STRING,
    phoneNumber: sequelize_1.DataTypes.STRING,
    situation: sequelize_1.DataTypes.STRING,
    situationDate: sequelize_1.DataTypes.STRING,
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    cnpjId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    confirm: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 1
    },
    email: sequelize_1.DataTypes.STRING
}, {
    sequelize: _1.default,
    modelName: 'buyers',
    timestamps: false,
});
Buyer.belongsTo(cnpj_model_1.default);
exports.default = Buyer;
//# sourceMappingURL=buyer.model.js.map