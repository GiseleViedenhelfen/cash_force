import { Request, Response } from "express";
import SponsorService from "../service/sponsorService";

export default class SponsorController {
  constructor(private sponsorService = new SponsorService()) {}
  public getAll = async (req: Request, res: Response): Promise <Response> => {
    const sponsor = await this.sponsorService.getSponsors();
    return res.status(200).json(sponsor);
  };
}