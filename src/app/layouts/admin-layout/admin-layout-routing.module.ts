import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateManufacturersComponent } from '../../modules/manufacturers/pages/create-manufacturers/create-manufacturers.component';
import { EditManufacturersComponent } from '../../modules/manufacturers/pages/edit-manufacturers/edit-manufacturers.component';
import { ListManufacturersComponent } from '../../modules/manufacturers/pages/list-manufacturers/list-manufacturers.component';
import { CreateProductsComponent } from '../../modules/products/pages/create-products/create-products.component';
import { EditProductsComponent } from '../../modules/products/pages/edit-products/edit-products.component';
import { ListProductsComponent } from '../../modules/products/pages/list-products/list-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manufacturers',
    pathMatch: 'full',
  },
  {
    path: 'manufacturers',
    component: ListManufacturersComponent,
  },
  {
    path: 'manufacturers/create',
    component: CreateManufacturersComponent
  },
  {
    path: 'manufacturers/edit/:id',
    component: EditManufacturersComponent
  },
  {
    path: 'products',
    component: ListProductsComponent,
  },
  {
    path: 'products/create',
    component: CreateProductsComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
