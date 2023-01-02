"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Cnpj extends sequelize_1.Model {
}
Cnpj.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cnpj: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    companyType: {
        type: sequelize_1.DataTypes.STRING,
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
}, {
    sequelize: _1.default,
    modelName: 'cnpjs',
    timestamps: false,
});
exports.default = Cnpj;
//# sourceMappingURL=cnpj.model.js.map