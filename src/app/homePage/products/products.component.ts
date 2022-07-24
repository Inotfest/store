import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(public http: HttpService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((res) => (this.products = res));
  }
}
