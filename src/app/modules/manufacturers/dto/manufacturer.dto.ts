export interface ManufacturerDto {
  nome: string;         // Campo obrigatório
  cnpj: string;         // Campo obrigatório
  cep?: string;         // Campo opcional
  logradouro?: string;  // Campo opcional
  numero?: string;      // Campo opcional
  complemento?: string; // Campo opcional
  bairro?: string;      // Campo opcional
  cidade?: string;      // Campo opcional
  estado?: string;      // Campo opcional
  contatoTipo: string;  // Campo obrigatório
  contato: string;      // Campo obrigatório
}
