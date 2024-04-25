import { Component } from '@angular/core';
import { LayoutsService } from '../../../../layouts/layouts.service';

@Component({
  selector: 'app-create-manufacturers',
  templateUrl: './create-manufacturers.component.html',
  styleUrl: './create-manufacturers.component.scss'
})
export class CreateManufacturersComponent {
  constructor(
    private layout: LayoutsService
  ) {
  }

  ngOnInit(): void {
    this.layout.setPageTitle('Fabricantes');
  }
}
