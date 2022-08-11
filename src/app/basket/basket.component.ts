import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../interfaces/product';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  public invoices: Invoice[];

  public totalMoney = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public deleteProduct(id: number) {
    this.localStorageService.deleteItemFromLocalStorage(id);
    this.getProducts();
  }

  private getProducts() {
    this.invoices = this.localStorageService.getDataFromLocalStorage();

    if (this.invoices.length) {
      this.invoices.forEach(
        (item) =>
          (this.totalMoney += item.numberOfproducts * item.product.price)
      );
    } else {
      this.router.navigate(['']);
    }
  }
}
