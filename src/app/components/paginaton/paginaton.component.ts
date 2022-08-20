import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-paginaton',
  templateUrl: './paginaton.component.html',
  styleUrls: ['./paginaton.component.scss'],
})
export class PaginatonComponent implements OnInit, OnDestroy {
  length = this.paginationService.length;
  pageSize = this.paginationService.pageSize;
  pageSizeOptions = this.paginationService.pageSizeOptions;

  private subscription$ = new Subscription();

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.paginationService.totalCount$.subscribe((res) => (this.length = res))
    );
  }

  changePage(event: PageEvent) {
    this.paginationService.pageChange(event.pageIndex, event.pageSize);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
