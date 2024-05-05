export default interface IClient {
  idClient: number;
  cpf: string;
  name: string;
  rg: string;
  issueDate: Date;
  issuingAuthority: string;
  state: string;
  birthDate: Date;
  gender: string;
  maritalStatus: string;
}
