import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObjFilterParams } from 'src/app/interfaces/filter';
import { Product } from 'src/app/interfaces/product';
import { FilterService } from 'src/app/services/filter.service';
import { HttpService } from 'src/app/services/http.service';
import { PaginationService } from 'src/app/services/pagination.service';

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
    private http: HttpService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.subscription$.add(this.filterProducts());
    this.subscription$.add(this.getProduct());
  }

  private filterProducts(): void {
    this.filterService.productsFilter$.subscribe((value) =>
      this.getProduct(value)
    );
  }

  private getProduct(value?: ObjFilterParams) {
    this.http.getData(value).subscribe((response) => {
      const totalCount = response.headers.get('X-Total-Count') as string;
      
      this.paginationService.totalCount$.next(totalCount);
      this.products = response.body as Product[];
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
