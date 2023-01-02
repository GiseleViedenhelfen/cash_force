"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buyerService_1 = require("../service/buyerService");
class BuyerController {
    constructor(buyerService = new buyerService_1.default()) {
        this.buyerService = buyerService;
        this.getAll = async (req, res) => {
            const buyers = await this.buyerService.getBuyers();
            return res.status(200).json(buyers);
        };
    }
}
exports.default = BuyerController;
//# sourceMappingURL=buyer.controller.js.map