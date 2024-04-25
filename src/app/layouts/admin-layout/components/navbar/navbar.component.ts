import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutsService } from '../../../layouts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  $pageTitle: Observable<string>;

  $sideBarOpened: Observable<boolean>;

  constructor(
    private layout: LayoutsService
  ){
    this.$pageTitle = this.layout.$pageTitle;
    this.$sideBarOpened = this.layout.$sidebarOpened;
  }

  toggleSidebar(){
    this.layout.toggleSidebar();
  }
}
