"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = require("../database/models/order.model");
const buyer_model_1 = require("../database/models/buyer.model");
const provider_model_1 = require("../database/models/provider.model");
class OrderService {
    constructor() {
        this.modelOrder = order_model_1.default;
        this.modelBuyer = buyer_model_1.default;
        this.modelProvider = provider_model_1.default;
    }
    async getOrders() {
        const orders = await this.modelOrder.findAll();
        return orders;
    }
    async orderCostumer() {
        const infosOrder = await this.modelOrder.findAll({
            attributes: [
                'id',
                'nNF',
                'buyerId',
                'providerId',
                'emissionDate',
                'value',
                'orderStatusBuyer',
            ],
            include: [{
                    model: buyer_model_1.default,
                    attributes: ['id', 'name'],
                }, {
                    model: provider_model_1.default,
                    attributes: ['id', 'name', 'tradingName', 'cnpjId'],
                }],
        });
        return infosOrder;
    }
}
exports.default = OrderService;
//# sourceMappingURL=orderService.js.map