"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const provider_model_1 = require("../database/models/provider.model");
class ProviderService {
    constructor() {
        this.model = provider_model_1.default;
    }
    async getProviders() {
        const providers = await this.model.findAll();
        return providers;
    }
}
exports.default = ProviderService;
//# sourceMappingURL=providerService.js.map