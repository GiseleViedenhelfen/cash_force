"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderPortionService_1 = require("../service/orderPortionService");
class OrderPortionController {
    constructor(orderPortionService = new orderPortionService_1.default()) {
        this.orderPortionService = orderPortionService;
        this.getAll = async (req, res) => {
            const orderPortions = await this.orderPortionService.getOrderPortions();
            return res.status(200).json(orderPortions);
        };
    }
}
exports.default = OrderPortionController;
//# sourceMappingURL=orderPortion.controller.js.map