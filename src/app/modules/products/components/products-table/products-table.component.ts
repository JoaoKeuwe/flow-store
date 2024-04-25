import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { ProductEntity } from '../../product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductEntity>;
  private data: ProductEntity[] = [];

  @Input()
  $searchText!: BehaviorSubject<string>

  constructor(
    private service: ProductService
  ) { }

  private isLoading = false

  totalElements = 0

  getTableData$({ page, perPage }: { page: number, perPage: number }) {
    return this.service.list({
      page,
      perPage
    })
  }

  delete(id: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Deseja realmente excluir?',
      html: 'Essa ação não poderá ser desfeita',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(id).subscribe(() => {
          this.paginator.page.emit()
        })
      }
    })
  }

  dataSource = new MatTableDataSource<ProductEntity>([]);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'fabricante', 'descricao', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    merge(
      this.paginator.page,
      this.sort.sortChange,
      this.$searchText
    ).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true
        return this.getTableData$({
          page: this.paginator.pageIndex,
          perPage: this.paginator.pageSize
        }).pipe(catchError(() => of(null)));
      }),
      map((data) => {
        if (!data) {
          return []
        }
        this.isLoading = false
        this.totalElements = data.totalElements
        return data.content.filter((item) => {
          const term = this.$searchText.getValue()
          if (!term) {
            return true
          }
          return JSON.stringify(item).toLowerCase().includes(term.toLowerCase())
        }).sort((a, b) => {
          if (this.sort.active && this.sort.direction) {
            if (this.sort.direction === 'asc') {
              return +(a as any)[this.sort.active] > +(b as any)[this.sort.active] ? 1 : -1
            } else {
              return +(a as any)[this.sort.active] < +(b as any)[this.sort.active] ? 1 : -1
            }
          }
          return 0
        })
      })
    ).subscribe((data) => {
      if (data) {
        this.data = data
        this.dataSource = new MatTableDataSource(this.data)
      }
    })
  }
}
