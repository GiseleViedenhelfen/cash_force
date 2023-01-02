"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const providerService_1 = require("../service/providerService");
class ProviderController {
    constructor(providerService = new providerService_1.default()) {
        this.providerService = providerService;
        this.getAll = async (req, res) => {
            const provider = await this.providerService.getProviders();
            return res.status(200).json(provider);
        };
    }
}
exports.default = ProviderController;
//# sourceMappingURL=provider.controller.js.map