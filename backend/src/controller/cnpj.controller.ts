import { Request, Response } from "express";
import CnpjService from "../service/cnpjService";

export default class CnpjController {
  constructor(private cnpjService = new CnpjService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const cnpjs = await this.cnpjService.getCnpjs();
    return res.status(200).json(cnpjs);
  };
}