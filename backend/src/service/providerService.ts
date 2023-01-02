import Provider from "../database/models/provider.model";

class ProviderService {
  public model = Provider;
  public async getProviders(): Promise<Provider[]> {
    const providers = await this.model.findAll() as Provider[];
    return providers;
  }
}

export default ProviderService;
