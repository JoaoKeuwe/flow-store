export class ManufacturerEntity {
  id: string;
  nome: string;
  cnpj: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  contatoTipo: string;
  contato: string;

  constructor(manufacturer: Omit<ManufacturerEntity, 'endereco'>) {
    this.id = manufacturer.id;
    this.nome = manufacturer.nome;
    this.cnpj = manufacturer.cnpj;
    this.cep = manufacturer.cep;
    this.logradouro = manufacturer.logradouro;
    this.numero = manufacturer.numero;
    this.complemento = manufacturer.complemento;
    this.bairro = manufacturer.bairro;
    this.cidade = manufacturer.cidade;
    this.estado = manufacturer.estado;
    this.contatoTipo = manufacturer.contatoTipo;
    this.contato = manufacturer.contato;
  }

  get uriCnpj(): string {
    return encodeURIComponent(this.cnpj);
  }

  get endereco(): string {
    return `${this.logradouro}, ${this.numero} - ${this.bairro}, ${this.cidade} - ${this.estado}`;
  }
}
