import IAddress from "./IAddress";

export default interface IClient {
  clienteId: number;
  cpf: string;
  nome: string;
  rg: string;
  dataExpedicao: Date;
  orgaoExpedicao: string;
  uf: string;
  dataNascimento: Date;
  sexo: string;
  estadoCivil: string;
  endereco: IAddress;
}
