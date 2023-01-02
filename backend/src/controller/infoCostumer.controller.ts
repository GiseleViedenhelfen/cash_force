import { Request, Response } from "express";
import OrderService from "../service/orderService";


export default class infoCostumerController {
  constructor(
    private orderService = new OrderService()
  ) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const orders = await this.orderService.orderCostumer();   
    return res.status(200).json(orders);
  };
}