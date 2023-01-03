import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
const mockInfo = require('./mockInfoCostumer.js')

chai.use(chaiHttp);
const { expect } = chai;

describe('/infoCostumer', () => {
  let chaHttpResponse: Response;
  describe('testa se os dados são coletados corretamente', () => {
    it('a rota tem retorno 200 e entrega um array de resultados', async () => {
      const response = await chai.request(app).get("/infoCostumer")
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
    });
    it('a rota entrega os dados esperados', async () => {
      const response = await chai.request(app).get("/infoCostumer")
      expect(response.body).to.be.deep.equal(mockInfo);
    })
  })
})