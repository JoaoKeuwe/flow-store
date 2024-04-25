import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from '@ngneat/input-mask';
import { ManufacturersModule } from '../manufacturers/manufacturers.module';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { EditProductsComponent } from './pages/edit-products/edit-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ListProductsComponent,
    CreateProductsComponent,
    EditProductsComponent,
    ProductsTableComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    ManufacturersModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSortModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
