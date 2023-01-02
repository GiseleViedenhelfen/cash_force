import { Request, Response } from "express";
import OrderPortionService from "../service/orderPortionService";

export default class OrderPortionController {
  constructor(private orderPortionService = new OrderPortionService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const orderPortions = await this.orderPortionService.getOrderPortions();
    return res.status(200).json(orderPortions);
  };
}