import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Pageable } from '../../core/interfaces/api';
import { ProductDto } from '../dto/product.dto';
import { ProductEntity } from '../product.entity';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const API_PRODUTO = environment.apiUrl + '/produto'

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getOne(
    codigoBarras: string
  ) {
    return this.http.get<Pageable<ProductEntity>>(
      `${API_PRODUTO}/${codigoBarras}`,
      { headers: httpHeaders }
    ).pipe(
      map((data) => {
        if (data.content.length !== 0) {
          return new ProductEntity(data.content[0])
        }
        return null
      })
    )
  }

  create(
    dto: ProductDto
  ) {
    return this.http.post<ProductEntity>(
      API_PRODUTO,
      dto,
      { headers: httpHeaders }
    ).pipe(
      map((data) => new ProductEntity(data))
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
    return this.http.get<Pageable<ProductEntity>>(
      API_PRODUTO,
      {
        headers: httpHeaders,
        params,
      }
    ).pipe(
      map((data) => ({
        ...data,
        content: data.content.map(el => new ProductEntity(el))
      }))
    )
  }

  delete(
    id: string
  ) {
    return this.http.delete(
      `${API_PRODUTO}/${id}`,
      { headers: httpHeaders }
    )
  }

  update(
    dto: ProductDto
  ) {
    return this.http.put<ProductEntity>(
      `${API_PRODUTO}`,
      dto,
      { headers: httpHeaders }
    ).pipe(
      map((data) => new ProductEntity(data))
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
