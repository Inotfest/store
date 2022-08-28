import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/interfaces/product';
import { FilterService } from 'src/app/services/filter.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];

  public notFound: boolean = false;

  private subscription$ = new Subscription();

  constructor(
    private filterService: FilterService,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    this.filterProducts();
  }

  private filterProducts(): void {
    this.subscription$.add(
      this.filterService.productsFilter$.subscribe((res) =>
        this.subscription$.add(
          this.http.getData(res).subscribe((response) => {
            const totalCount = response.headers.get('X-Total-Count') as string;
            const totalCountNumber = +totalCount;

            this.filterService.totalCount$.next(totalCountNumber);

            const res = response.body as Product[];

            if (res.length) {
              this.products = res;
              this.notFound = false;
            } else {
              this.notFound = true;
            }
          })
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
