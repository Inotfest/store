import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { FilterService } from 'src/app/services/filter.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  page = 1;
  pageSize = 12;

  products: Product[] = [];
  private destroy$ = new Subject<boolean>();

  constructor(private filter: FilterService, private http: HttpService) {}

  ngOnInit(): void {
    this.http
      .getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => (this.products = res));
    this.getProduct();
  }

  private getProduct() {
    this.filter.productsFilter$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) =>
        this.http
          .getData(value)
          .pipe(takeUntil(this.destroy$))
          .subscribe((res) => {
            this.page = 1;
            this.products = res;
          })
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
