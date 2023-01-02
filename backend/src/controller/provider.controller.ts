import { Request, Response } from "express";
import ProviderService from "../service/providerService";

export default class ProviderController {
  constructor(private providerService = new ProviderService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const provider = await this.providerService.getProviders();
    return res.status(200).json(provider);
  };
}