import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderForm } from '../interfaces/orderForm';
import { Invoice, Product } from '../interfaces/product';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  public invoices: Invoice[];

  public form: FormGroup;

  public totalMoney: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpService
  ) {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(35),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(35),
      ]),
      region: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(35),
      ]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(35),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      email: new FormControl('', [Validators.email]),
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public deleteProduct(product: Product): void {
    if (product.id) {
      this.localStorageService.deleteItemFromLocalStorage(product.id);
      this.getProducts();
    }
  }

  private getProducts(): void {
    this.invoices = this.localStorageService.getDataFromLocalStorage();

    this.totalMoney = 0;

    if (this.invoices.length) {
      this.invoices.forEach(
        (item) =>
          (this.totalMoney += item.numberOfproducts * item.product.price)
      );
    } else {
      this.router.navigate(['']);
    }
  }

  public submit(): void {
    const orderObject: OrderForm = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      region: this.form.value.region,
      city: this.form.value.city,
      address: this.form.value.address,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
      products: this.invoices,
    };

    this.http.sendOrders(orderObject).subscribe((res) => console.log(res));

    this.localStorageService.deleteAllItemsFromLocalStorage();
    this.router.navigate(['']);
  }
}
