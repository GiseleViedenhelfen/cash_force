"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sponsorService_1 = require("../service/sponsorService");
class SponsorController {
    constructor(sponsorService = new sponsorService_1.default()) {
        this.sponsorService = sponsorService;
        this.getAll = async (req, res) => {
            const sponsor = await this.sponsorService.getSponsors();
            return res.status(200).json(sponsor);
        };
    }
}
exports.default = SponsorController;
//# sourceMappingURL=sponsor.controller.js.map