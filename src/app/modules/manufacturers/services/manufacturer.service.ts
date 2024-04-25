import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Pageable } from '../../core/interfaces/api';
import { ManufacturerDto } from '../dto/manufacturer.dto';
import { ManufacturerEntity } from '../manufacturer.entity';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const API_PESSOA = environment.apiUrl + '/pessoa'

@Injectable()
export class ManufacturerService {

  constructor(
    private http: HttpClient
  ) { }

  getOne(
    cnpj: string
  ) {
    return this.http.get<Pageable<ManufacturerEntity>>(
      `${API_PESSOA}/${cnpj}`,
      { headers: httpHeaders }
    ).pipe(
      map((data) => {
        if (data.content.length !== 0) {
          return new ManufacturerEntity(data.content[0])
        }
        throw new Error('Not found')
      })
    )
  }

  create(
    dto: ManufacturerDto
  ) {
    return this.http.post<ManufacturerEntity>(
      API_PESSOA,
      dto,
      { headers: httpHeaders }
    ).pipe(
      map((data) => new ManufacturerEntity(data))
    )
  }

  list({
    page,
    perPage
  }: {
    page?: number
    perPage?: number
  } = {}) {
    let params = new HttpParams()
    if (page !== undefined) {
      params = params.set('initialPage', page?.toString())
    }
    if (perPage !== undefined) {
      params = params.set('pageSize', perPage?.toString())
    }
    return this.http.get<Pageable<ManufacturerEntity>>(
      API_PESSOA,
      {
        headers: httpHeaders,
        params,
      }
    ).pipe(
      map((data) => ({
        ...data,
        content: data.content.map(el => new ManufacturerEntity(el))
      }))
    )
  }

  delete(
    id: string
  ) {
    return this.http.delete(
      `${API_PESSOA}/${id}`,
      { headers: httpHeaders }
    )
  }

  update(
    dto: ManufacturerDto
  ) {
    return this.http.put<ManufacturerEntity>(
      `${API_PESSOA}`,
      dto,
      { headers: httpHeaders }
    ).pipe(
      map((data) => new ManufacturerEntity(data))
    )
  }

  getInfoFromCep(cep: string) {
    return this.http.get<{
      cep: string
      logradouro: string
      complemento: string
      bairro: string
      localidade: string
      uf: string
      ibge: string
      gia: string
      ddd: string
      siafi: string
    }>(
      `https://viacep.com.br/ws/${cep}/json/`
    )
  }
}
