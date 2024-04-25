import { Component } from '@angular/core';
import { LayoutsService } from '../../../../layouts/layouts.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.scss'
})
export class CreateProductsComponent {
  constructor(
    private layout: LayoutsService
  ) {
  }

  ngOnInit(): void {
    this.layout.setPageTitle('Produtos');
  }
}
