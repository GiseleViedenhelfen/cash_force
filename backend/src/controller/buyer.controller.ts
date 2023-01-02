import { Request, Response } from "express";
import BuyerService from "../service/buyerService";

export default class BuyerController {
  constructor(private buyerService = new BuyerService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const buyers = await this.buyerService.getBuyers();
    return res.status(200).json(buyers);
  };
}