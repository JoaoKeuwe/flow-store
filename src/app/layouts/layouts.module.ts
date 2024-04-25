import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../modules/components/components.module';
import { ManufacturersModule } from '../modules/manufacturers/manufacturers.module';
import { ProductsModule } from '../modules/products/products.module';
import { AdminLayoutRoutingModule } from './admin-layout/admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from './admin-layout/components/navbar/navbar.component';
import { SidebarComponent } from './admin-layout/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ManufacturersModule,
    ProductsModule,
    ComponentsModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [AdminLayoutComponent]
})
export class LayoutsModule { }
