import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { EventService } from 'src/app/services/event.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription$ = new Subscription();

  constructor(private event: EventService, private http: HttpService) {}

  ngOnInit(): void {
    this.subscription$.add(this.getProduct());
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getProduct() {
    this.event.eventProduct$.subscribe((value) =>
      this.http.getData(value).subscribe((res) => (this.products = res))
    );
  }
}
