"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
const cors = require("cors");
const user_controller_1 = require("./controller/user.controller");
const sponsor_controller_1 = require("./controller/sponsor.controller");
const provider_controller_1 = require("./controller/provider.controller");
const orderPortion_controller_1 = require("./controller/orderPortion.controller");
const buyer_controller_1 = require("./controller/buyer.controller");
const cnpj_controller_1 = require("./controller/cnpj.controller");
const order_controller_1 = require("./controller/order.controller");
const offer_controller_1 = require("./controller/offer.controller");
const infoCostumer_controller_1 = require("./controller/infoCostumer.controller");
class App {
    constructor() {
        this.app = express();
        const userController = new user_controller_1.default();
        const sponsorController = new sponsor_controller_1.default();
        const providerController = new provider_controller_1.default();
        const orderPortionController = new orderPortion_controller_1.default();
        const buyerController = new buyer_controller_1.default();
        const cnpjController = new cnpj_controller_1.default();
        const orderController = new order_controller_1.default();
        const offerController = new offer_controller_1.default();
        const infoCostumer = new infoCostumer_controller_1.default();
        this.app.use(cors());
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.app.get('/users', userController.getAll);
        this.app.get('/sponsors', sponsorController.getAll);
        this.app.get('/provider', providerController.getAll);
        this.app.get('/orderPortion', orderPortionController.getAll);
        this.app.get('/buyers', buyerController.getAll);
        this.app.get('/cnpjs', cnpjController.getAll);
        this.app.get('/orders', orderController.getAll);
        this.app.get('/offers', offerController.getAll);
        this.app.get('/infoCostumer', infoCostumer.getAll);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map