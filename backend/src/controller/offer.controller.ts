import { Request, Response } from "express";
import OfferService from "../service/offer";

export default class OfferController {
  constructor(private offerService = new OfferService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const offers = await this.offerService.getOffers();
    return res.status(200).json(offers);
  };
}