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

  private subscription$ = new Subscription();

  constructor(
    private filterService: FilterService,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    this.subscription$.add(this.filterProducts());
  }

  private filterProducts(): void {
    this.filterService.productsFilter$.subscribe((res) =>
      this.http.getData(res).subscribe((response) => {
        const totalCount = response.headers.get('X-Total-Count') as string;
        const totalCountNumber = +totalCount;

        this.filterService.totalCount$.next(totalCountNumber);
        this.products = response.body as Product[];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
