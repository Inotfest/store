import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderForm } from 'src/app/interfaces/orderForm';
import { Invoice, Product } from '../../interfaces/product';
import { HttpService } from 'src/app/services/http.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Subscription } from 'rxjs';
import { QuantityOfGoods } from 'src/app/constants/QuantityOfGoods';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  public invoices: Invoice[];

  public form: FormGroup;

  public totalMoney: number = 0;

  private subscription$ = new Subscription();

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

    this.subscription$.add(
      this.localStorageService.changePrice$.subscribe(
        (res) => (this.totalMoney = res)
      )
    );
  }

  public plusProduct(invoice: Invoice): void {
    if (invoice.numberOfproducts < QuantityOfGoods.MAX_NUMBER_OF_PRODUCTS) {
      invoice.numberOfproducts++;
      this.localStorageService.chengeItemFromLocalStorage(invoice);
    }
  }

  public minusProduct(invoice: Invoice) {
    if (invoice.numberOfproducts > QuantityOfGoods.MIN_NUMBER_OF_PRODUCTS) {
      invoice.numberOfproducts--;
      this.localStorageService.chengeItemFromLocalStorage(invoice);
    }
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

    this.http.sendOrders(orderObject).subscribe();

    this.subscription$.add(
      this.localStorageService.deleteAllItemsFromLocalStorage()
    );
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
