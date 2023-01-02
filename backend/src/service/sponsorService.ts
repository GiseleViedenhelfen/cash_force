import Sponsor from "../database/models/sponsor.model";

class SponsorService {
  public model = Sponsor;
  public async getSponsors(): Promise<Sponsor[]> {
    const sponsors = await this.model.findAll() as Sponsor[];
    return sponsors;
  }
}

export default SponsorService;
