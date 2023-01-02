"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const cnpj_model_1 = require("./cnpj.model");
class Sponsor extends sequelize_1.Model {
}
Sponsor.init({
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
    bank: sequelize_1.DataTypes.STRING,
    bankAgency: sequelize_1.DataTypes.STRING,
    account: sequelize_1.DataTypes.STRING,
    phoneNumber: sequelize_1.DataTypes.STRING,
    situation: sequelize_1.DataTypes.STRING,
    situationDate: sequelize_1.DataTypes.STRING,
    createdAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    updatedAt: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    cnpjId: sequelize_1.DataTypes.INTEGER.ZEROFILL,
    email: sequelize_1.DataTypes.STRING
}, {
    sequelize: _1.default,
    modelName: 'sponsors',
    timestamps: false,
});
Sponsor.belongsTo(cnpj_model_1.default);
exports.default = Sponsor;
//# sourceMappingURL=sponsor.model.js.map