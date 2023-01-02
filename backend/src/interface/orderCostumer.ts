
interface Ibuyer {
  id: number;
  name: string;
  tradinName: string;
  cnpjId: string;
};

interface IProvider {
  id: number;
  name: string; 
};

interface ICostumer {
  id: number;
  nNF: string;
  buyerId: number;
  providerId: number;
  emissionDate: string;
  value: string;
  orderStatusBuyer: string;
  buyer: Ibuyer;
  provider: IProvider;
};

export default ICostumer;
