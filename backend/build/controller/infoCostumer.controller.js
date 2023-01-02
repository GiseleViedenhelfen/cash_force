"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderService_1 = require("../service/orderService");
class infoCostumerController {
    constructor(orderService = new orderService_1.default()) {
        this.orderService = orderService;
        this.getAll = async (req, res) => {
            const orders = await this.orderService.orderCostumer();
            return res.status(200).json(orders);
        };
    }
}
exports.default = infoCostumerController;
//# sourceMappingURL=infoCostumer.controller.js.map