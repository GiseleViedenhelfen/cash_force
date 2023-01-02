import Buyer from "../database/models/buyer.model";

class BuyerService {
  public model = Buyer;
  public async getBuyers(): Promise<Buyer[]> {
    const buyers = await this.model.findAll() as Buyer[];
    return buyers;
  }
}

export default BuyerService;
