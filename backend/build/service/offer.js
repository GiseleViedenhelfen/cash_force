"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const offer_model_1 = require("../database/models/offer.model");
class OfferService {
    constructor() {
        this.model = offer_model_1.default;
    }
    async getOffers() {
        const offer = await this.model.findAll();
        return offer;
    }
}
exports.default = OfferService;
//# sourceMappingURL=offer.js.map