"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buyer_model_1 = require("../database/models/buyer.model");
class BuyerService {
    constructor() {
        this.model = buyer_model_1.default;
    }
    async getBuyers() {
        const buyers = await this.model.findAll();
        return buyers;
    }
}
exports.default = BuyerService;
//# sourceMappingURL=buyerService.js.map