export interface SortObject {
  empty: boolean
  sorted: boolean
  unsorted: boolean

}

export interface PageableObject {
  page: number
  size: number
  sort: string[]
}

export interface Pageable<T> {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T[];
  number: number;
  sort: SortObject;
  numberOfElements: number;
  pageable: PageableObject;
  first: boolean;
  last: boolean;
  empty: boolean;
}
