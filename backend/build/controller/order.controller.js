"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderService_1 = require("../service/orderService");
class OrderController {
    constructor(orderService = new orderService_1.default()) {
        this.orderService = orderService;
        this.getAll = async (req, res) => {
            const orders = await this.orderService.getOrders();
            return res.status(200).json(orders);
        };
    }
}
exports.default = OrderController;
//# sourceMappingURL=order.controller.js.map