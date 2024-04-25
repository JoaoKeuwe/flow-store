import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { LayoutsService } from '../../../../layouts/layouts.service';

@Component({
  selector: 'app-list-manufacturers',
  templateUrl: './list-manufacturers.component.html',
  styleUrl: './list-manufacturers.component.scss'
})
export class ListManufacturersComponent implements OnInit {
  private currentSearchText$ = new BehaviorSubject<string>('');

  $searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');

  search(term: string) {
    this.currentSearchText$.next(term);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  constructor(
    private layout: LayoutsService
  ) {
    this.currentSearchText$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((term: string) => this.$searchText.next(term))
    ).subscribe();
  }

  ngOnInit(): void {
    this.layout.setPageTitle('Fabricantes');
  }
}
