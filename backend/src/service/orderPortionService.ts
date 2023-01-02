import OrderPortion from "../database/models/orderPortion.model";

class OrderPortionService {
  public model = OrderPortion;
  public async getOrderPortions(): Promise<OrderPortion[]> {
    const orderPortion = await this.model.findAll() as OrderPortion[];
    return orderPortion;
  }
}

export default OrderPortionService;
