import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  public pageSize = 10;
  public pageSizeOptions = [5, 10, 25, 100];
  public length = '100';

  public totalCount$ = new Subject<string>();

  constructor(private filterService: FilterService) {}

  public pageChange(page: number, pageSize: number) {
    this.filterService.objParams.page = page + 1;
    this.filterService.objParams.pageSize = pageSize;

    this.filterService.sendingUrlParameters();
  }
}
