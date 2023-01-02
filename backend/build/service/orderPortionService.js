"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderPortion_model_1 = require("../database/models/orderPortion.model");
class OrderPortionService {
    constructor() {
        this.model = orderPortion_model_1.default;
    }
    async getOrderPortions() {
        const orderPortion = await this.model.findAll();
        return orderPortion;
    }
}
exports.default = OrderPortionService;
//# sourceMappingURL=orderPortionService.js.map