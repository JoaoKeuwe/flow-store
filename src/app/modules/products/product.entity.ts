import { ManufacturerEntity } from '../manufacturers/manufacturer.entity';

export class ProductEntity {
  id: string;
  nome: string;
  descricao: string;
  codigoBarras: string;
  fabricante?: ManufacturerEntity;

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
