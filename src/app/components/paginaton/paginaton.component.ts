import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-paginaton',
  templateUrl: './paginaton.component.html',
  styleUrls: ['./paginaton.component.scss'],
})
export class PaginatonComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public pageSize = this.filterService.pageSize;
  public pageSizeOptions = this.filterService.pageSizeOptions;
  public length = this.filterService.numberOfItems;
  public pageIndex = this.filterService.pageIndex;

  subscription$ = new Subscription();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.filterService.totalCount$.subscribe((res) => (this.length = res))
    );
    this.subscription$.add(
      this.filterService.initialPage$.subscribe(() => {
        this.paginator.firstPage();
      })
    );
  }

  public changePage(event: PageEvent): void {
    this.filterService.pageChange(
      event.pageIndex,
      event.pageSize,
      event.length
    );
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
