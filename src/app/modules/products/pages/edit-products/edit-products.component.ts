import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LayoutsService } from '../../../../layouts/layouts.service';
import { ProductEntity } from '../../product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.scss'
})
export class EditProductsComponent {
  constructor(
    private service: ProductService,
    private layout: LayoutsService,
    private route: ActivatedRoute
  ) {
  }

  $data!: Observable<ProductEntity | null>

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.layout.setPageTitle('Produtos');

    this.$data = this.service.getOne(id)
    this.$data.subscribe()
  }
}
