export class ManufacturerEntity {
  id: string;           // Identificador único
  nome: string;         // Nome do fabricante
  cnpj: string;         // CNPJ do fabricante
  cep: string;          // Código Postal
  logradouro: string;   // Logradouro
  numero: string;       // Número do endereço
  complemento: string;  // Complemento do endereço
  bairro: string;       // Bairro
  cidade: string;       // Cidade
  estado: string;       // Estado
  contatoTipo: string;  // Tipo de contato (e.g., telefone, email)
  contato: string;      // Dados de contato

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
