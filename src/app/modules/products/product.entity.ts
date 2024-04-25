import { ManufacturerEntity } from "../manufacturers/manufacturer.entity";

export class ProductEntity {
  id: string;           // Identificador único
  nome: string;         // Nome do produto
  descricao: string;         // Descrição do produto
  codigoBarras: string;          // Código de barras
  fabricante?: ManufacturerEntity;   // Referencia do fabricante

  constructor(product: ProductEntity) {
    this.id = product.id;
    this.nome = product.nome;
    this.codigoBarras = product.codigoBarras;
    this.descricao = product.descricao;
    if (product.fabricante) {
      this.fabricante = new ManufacturerEntity(product.fabricante);
    }
  }
}
