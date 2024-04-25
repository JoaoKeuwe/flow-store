import { Component, Input, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import Swal from 'sweetalert2';
import { ManufacturerEntity } from '../../../manufacturers/manufacturer.entity';
import { ManufacturerService } from '../../../manufacturers/services/manufacturer.service';
import { ProductDto } from '../../dto/product.dto';
import { ProductEntity } from '../../product.entity';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.scss'
})
export class ProductsFormComponent implements OnInit {

  @Input()
  initialData!: ProductEntity | undefined;

  constructor(
    private service: ProductService,
    private manufacturerService: ManufacturerService,
    private router: Router
  ) {
    this.$manufacturerList = this.manufacturerService.list().pipe(
      map(data => data.content)
    )
  }

  private fb = inject(FormBuilder);

  form = this.fb.group({
    nome: [null, Validators.required],
    descricao: [null, Validators.required],
    fabricanteID: [null, Validators.required],
    codigoBarras: [null, Validators.required],
  });

  $manufacturerList: Observable<ManufacturerEntity[]>

  hasUnitNumber = false;

  ngOnInit(): void {
    this.form.patchValue({...this.initialData,
      fabricanteID: this.initialData?.fabricante?.id
    } as any);
    this.form.get('cep')?.valueChanges.subscribe((value) => {
      if (value && !(value as string).includes('_')) {
        console.log('fetching')
        this.service.getInfoFromCep(value).subscribe((data) => {
          if (data) {
            this.form.patchValue({
              logradouro: data.logradouro,
              complemento: data.complemento,
              cidade: data.localidade,
              estado: data.uf
            } as any)
          }
        })
      }
    })
  }

  contactTypes = [
    'Telefone', 'Celular', 'Email'
  ]

  onSubmit(): void {
    const data: ProductDto = this.form.value as unknown as ProductDto;
    if (!this.form.invalid) {
      if (this.initialData) {
        this.service.update(data).subscribe({
          complete: () => {
            Swal.fire('Sucesso!', 'Fabricante atualizado com sucesso', 'success').then(() => {
              this.router.navigate(['/products'])
            })
          },
          error(err) {
            console.log(err)
            Swal.fire('Erro!', 'Ocorreu um erro ao atualizar o fabricante', 'error')
          },
        })
      } else {
        this.service.create(data).subscribe({
          complete: () => {
            Swal.fire('Sucesso!', 'Fabricante criado com sucesso', 'success').then(() => {
              this.router.navigate(['/products'])
            })
          },
          error(err) {
            console.log(err)
            Swal.fire('Erro!', 'Ocorreu um erro ao criar o fabricante', 'error')
          },
        })
      }
    }
  }
}
