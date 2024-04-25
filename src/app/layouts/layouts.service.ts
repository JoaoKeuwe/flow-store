import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {
  $pageTitle = new BehaviorSubject<string>('Desafio Técnico Frontend');
  $mobileMediaMatches: Observable<boolean>;

  $sidebarOpened = new BehaviorSubject<boolean>(true);

  constructor(
    private responsive: BreakpointObserver
  ) {
    this.$mobileMediaMatches = this.responsive.observe('(max-width: 768px)').pipe(
      map((state: BreakpointState) => state.matches)
    )
    this.$mobileMediaMatches.subscribe((data) => {
      if (data) {
        this.$sidebarOpened.next(false)
      }
    })
  }

  toggleSidebar() {
    this.$sidebarOpened.next(!this.$sidebarOpened.value);
  }

  closeSidebar() {
    this.$sidebarOpened.next(false);
  }

  setPageTitle(title: string) {
    this.$pageTitle.next(title);
  }
}
