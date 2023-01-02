"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var _1 = require(".");
var order_model_1 = require("./order.model");
var OrderPortions = /** @class */ (function (_super) {
    __extends(OrderPortions, _super);
    function OrderPortions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderPortions;
}(sequelize_1.Model));
OrderPortions.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.ZEROFILL,
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
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    orderId: sequelize_1.DataTypes.INTEGER.ZEROFILL
}, {
    sequelize: _1["default"],
    modelName: 'orderPortions',
    timestamps: false
});
OrderPortions.belongsTo(order_model_1["default"], { foreignKey: 'id', as: 'orderId' });
exports["default"] = OrderPortions;
