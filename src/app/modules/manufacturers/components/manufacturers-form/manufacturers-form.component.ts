import { Component, Input, OnInit, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createMask } from '@ngneat/input-mask';
import Swal from 'sweetalert2';
import { ManufacturerDto } from '../../dto/manufacturer.dto';
import { ManufacturerEntity } from '../../manufacturer.entity';
import { ManufacturerService } from '../../services/manufacturer.service';


@Component({
  selector: 'app-manufacturers-form',
  templateUrl: './manufacturers-form.component.html',
  styleUrl: './manufacturers-form.component.scss'
})
export class ManufacturersFormComponent implements OnInit {

  @Input()
  initialData!: ManufacturerEntity | undefined;

  constructor(
    private service: ManufacturerService,
    private router: Router
  ) {
  }

  private fb = inject(FormBuilder);

  cepInputMask = createMask('99999-999');
  cnpjInputMask = createMask('99.999.999/9999-99');
  phoneInputMask: any = createMask('(99) 9 9999-9999');

  form = this.fb.group({
    cnpj: [null, Validators.required],
    nome: [null, Validators.required],
    cep: [null, Validators.required],
    logradouro: [null, Validators.required],
    contato: [null, Validators.required],
    contatoTipo: [null, Validators.required],
    numero: null,
    complemento: null,
    cidade: [null, Validators.required],
    estado: [null, Validators.required],
  });

  hasUnitNumber = false;

  states = [
    { "name": "Acre", "abbreviation": "AC" },
    { "name": "Alagoas", "abbreviation": "AL" },
    { "name": "Amapá", "abbreviation": "AP" },
    { "name": "Amazonas", "abbreviation": "AM" },
    { "name": "Bahia", "abbreviation": "BA" },
    { "name": "Ceará", "abbreviation": "CE" },
    { "name": "Distrito Federal", "abbreviation": "DF" },
    { "name": "Espírito Santo", "abbreviation": "ES" },
    { "name": "Goiás", "abbreviation": "GO" },
    { "name": "Maranhão", "abbreviation": "MA" },
    { "name": "Mato Grosso", "abbreviation": "MT" },
    { "name": "Mato Grosso do Sul", "abbreviation": "MS" },
    { "name": "Minas Gerais", "abbreviation": "MG" },
    { "name": "Pará", "abbreviation": "PA" },
    { "name": "Paraíba", "abbreviation": "PB" },
    { "name": "Paraná", "abbreviation": "PR" },
    { "name": "Pernambuco", "abbreviation": "PE" },
    { "name": "Piauí", "abbreviation": "PI" },
    { "name": "Rio de Janeiro", "abbreviation": "RJ" },
    { "name": "Rio Grande do Norte", "abbreviation": "RN" },
    { "name": "Rio Grande do Sul", "abbreviation": "RS" },
    { "name": "Rondônia", "abbreviation": "RO" },
    { "name": "Roraima", "abbreviation": "RR" },
    { "name": "Santa Catarina", "abbreviation": "SC" },
    { "name": "São Paulo", "abbreviation": "SP" },
    { "name": "Sergipe", "abbreviation": "SE" },
    { "name": "Tocantins", "abbreviation": "TO" }
  ];

  ngOnInit(): void {
    this.form.patchValue(this.initialData as any);
    this.form.get('cep')?.valueChanges.subscribe((value) => {
      if (value && !(value as string).includes('_')) {
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
    const data: ManufacturerDto = this.form.value as unknown as ManufacturerDto;
    data.cnpj = data.cnpj.replace(/\D/g, '');
    if (!this.form.invalid) {
      if (this.initialData) {
        this.service.update(data).subscribe({
          complete: () => {
            Swal.fire('Sucesso!', 'Fabricante atualizado com sucesso', 'success').then(() => {
              this.router.navigate(['/manufacturers'])
            })
          },
          error() {
            Swal.fire('Erro!', 'Ocorreu um erro ao atualizar o fabricante', 'error')
          },
        })
      } else {
        this.service.create(data).subscribe({
          complete: () => {
            Swal.fire('Sucesso!', 'Fabricante criado com sucesso', 'success').then(() => {
              this.router.navigate(['/manufacturers'])
            })
          },
          error() {
            Swal.fire('Erro!', 'Ocorreu um erro ao criar o fabricante', 'error')
          },
        })
      }
    }
  }
}
