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
  page = 1;
  pageSize = 12;

  products: Product[] = [];

  subscription$ = new Subscription();

  constructor(private filter: FilterService, private http: HttpService) {}

  ngOnInit(): void {
    this.subscription$.add(this.getProduct());
    this.subscription$.add(
      this.http.getData().subscribe((res) => (this.products = res))
    );
  }

  private getProduct() {
    this.filter.productsFilter$.subscribe((value) =>
      this.http.getData(value).subscribe((res) => {
        this.page = 1;
        this.products = res;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
