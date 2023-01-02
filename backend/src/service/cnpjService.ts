import Cnpj from "../database/models/cnpj.model";

class CnpjService {
  public model = Cnpj;
  public async getCnpjs(): Promise<Cnpj[]> {
    const cnpjs = await this.model.findAll() as Cnpj[];
    return cnpjs;
  }
}

export default CnpjService;
