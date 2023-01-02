import Order from "../database/models/order.model";
import Buyer from "../database/models/buyer.model";
import Provider from "../database/models/provider.model";
import ICostumer from "../interface/orderCostumer";
class OrderService {
  public modelOrder = Order;
  public modelBuyer = Buyer;
  public modelProvider = Provider;
  public async getOrders(): Promise<Order[]> {
    const orders = await this.modelOrder.findAll() as Order[];
    return orders;
  }
  public async orderCostumer(): Promise<Order[]> {
    const infosOrder = await this.modelOrder.findAll({
      attributes:[
        'id',
        'nNF',
        'buyerId',
        'providerId',
        'emissionDate',
        'value',
        'orderStatusBuyer',
      ],
     include: [{
       model: Buyer,
       attributes: ['id', 'name'],
     }, {
      model: Provider,
      attributes: ['id', 'name', 'tradingName', 'cnpjId'],
    }], 
    });
      return infosOrder;
    }
}

export default OrderService;
