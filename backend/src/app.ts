import * as express from 'express';
import * as cors from 'cors';
import UserController from './controller/user.controller';
import SponsorController from './controller/sponsor.controller';
import ProviderController from './controller/provider.controller';
import OrderPortionController from './controller/orderPortion.controller';
import BuyerController from './controller/buyer.controller';
import CnpjController from './controller/cnpj.controller';
import OrderController from './controller/order.controller';
import OfferController from './controller/offer.controller';
import infoCostumerController from './controller/infoCostumer.controller';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    const userController = new UserController();
    const sponsorController = new SponsorController();
    const providerController = new ProviderController();
    const orderPortionController = new OrderPortionController();
    const buyerController = new BuyerController();
    const cnpjController = new CnpjController();
    const orderController = new OrderController();
    const offerController = new OfferController();
    const infoCostumer = new infoCostumerController();
    this.app.use(cors());
    this.app.get('/users', userController.getAll);
    this.app.get('/sponsors', sponsorController.getAll);
    this.app.get('/provider', providerController.getAll);
    this.app.get('/orderPortion', orderPortionController.getAll);
    this.app.get('/buyers', buyerController.getAll);
    this.app.get('/cnpjs', cnpjController.getAll);
    this.app.get('/orders', orderController.getAll);
    this.app.get('/offers', offerController.getAll);
    this.app.get('/infoCostumer', infoCostumer.getAll)
  }
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
