import { Component } from '@angular/core';
import { LayoutsService } from '../../../layouts.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'manufacturers', title: 'Fabricantes', icon: 'group', class: '' },
  { path: 'products', title: 'Produtos', icon: 'inventory_2', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems: RouteInfo[];

  constructor(
    private layout: LayoutsService,
  ) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  toggle(){
    this.layout.toggleSidebar();
  }
}
