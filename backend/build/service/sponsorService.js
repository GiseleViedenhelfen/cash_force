"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsor_model_1 = require("../database/models/sponsor.model");
class SponsorService {
    constructor() {
        this.model = sponsor_model_1.default;
    }
    async getSponsors() {
        const sponsors = await this.model.findAll();
        return sponsors;
    }
}
exports.default = SponsorService;
//# sourceMappingURL=sponsorService.js.map