import Offer from "../database/models/offer.model";

class OfferService {
  public model = Offer;
  public async getOffers(): Promise<Offer[]> {
    const offer = await this.model.findAll() as Offer[];
    return offer;
  }
}

export default OfferService;
