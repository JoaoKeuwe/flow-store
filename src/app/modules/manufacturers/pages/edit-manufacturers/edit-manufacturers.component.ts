import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import Swal from 'sweetalert2';
import { LayoutsService } from '../../../../layouts/layouts.service';
import { ManufacturerEntity } from '../../manufacturer.entity';
import { ManufacturerService } from '../../services/manufacturer.service';

@Component({
  selector: 'app-edit-manufacturers',
  templateUrl: './edit-manufacturers.component.html',
  styleUrl: './edit-manufacturers.component.scss'
})
export class EditManufacturersComponent implements OnInit {

  constructor(
    private service: ManufacturerService,
    private layout: LayoutsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  $data!: Observable<ManufacturerEntity | null>

  ngOnInit(): void {
    const id = decodeURIComponent(this.route.snapshot.params['id']);
    this.layout.setPageTitle('Fabricantes');

    this.$data = this.service.getOne(id).pipe(
      catchError(() => {
        Swal.fire(
          'Erro',
          'Não foi possível carregar os dados',
          'error'
        ).then(() => {
          this.router.navigate(['/manufacturers'])
        })
        return of(null)
      })
    )
    this.$data.subscribe()
  }
}
