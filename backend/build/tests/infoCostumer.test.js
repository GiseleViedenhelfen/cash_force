"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
// @ts-ignore
const chaiHttp = require("chai-http");
const app_1 = require("../app");
const mockInfo = require('./mockInfoCostumer.js');
chai.use(chaiHttp);
const { expect } = chai;
describe('/infoCostumer', () => {
    let chaHttpResponse;
    describe('testa se os dados são coletados corretamente', () => {
        it('a rota tem retorno 200 e entrega um array de resultados', async () => {
            const response = await chai.request(app_1.app).get("/infoCostumer");
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
        });
        it('a rota entrega os dados esperados', async () => {
            const response = await chai.request(app_1.app).get("/infoCostumer");
            expect(response.body).to.be.deep.equal(mockInfo);
        });
    });
});
//# sourceMappingURL=infoCostumer.test.js.map