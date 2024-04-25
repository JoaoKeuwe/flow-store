import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutsService } from '../layouts.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  $sidebarOpened: Observable<boolean>;
  $mobileMediaMatches: Observable<boolean>;

  constructor(
    private layout: LayoutsService,
  ) {
    this.$mobileMediaMatches = this.layout.$mobileMediaMatches;
    this.$sidebarOpened = this.layout.$sidebarOpened.asObservable();
  }

  closeSidebar(){
    this.layout.closeSidebar();
  }
}
