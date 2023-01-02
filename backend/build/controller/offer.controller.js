"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offer_1 = require("../service/offer");
class OfferController {
    constructor(offerService = new offer_1.default()) {
        this.offerService = offerService;
        this.getAll = async (req, res) => {
            const offers = await this.offerService.getOffers();
            return res.status(200).json(offers);
        };
    }
}
exports.default = OfferController;
//# sourceMappingURL=offer.controller.js.map