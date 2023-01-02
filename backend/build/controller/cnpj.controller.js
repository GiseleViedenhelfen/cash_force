"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cnpjService_1 = require("../service/cnpjService");
class CnpjController {
    constructor(cnpjService = new cnpjService_1.default()) {
        this.cnpjService = cnpjService;
        this.getAll = async (req, res) => {
            const cnpjs = await this.cnpjService.getCnpjs();
            return res.status(200).json(cnpjs);
        };
    }
}
exports.default = CnpjController;
//# sourceMappingURL=cnpj.controller.js.map