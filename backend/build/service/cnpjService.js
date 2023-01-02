"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cnpj_model_1 = require("../database/models/cnpj.model");
class CnpjService {
    constructor() {
        this.model = cnpj_model_1.default;
    }
    async getCnpjs() {
        const cnpjs = await this.model.findAll();
        return cnpjs;
    }
}
exports.default = CnpjService;
//# sourceMappingURL=cnpjService.js.map