import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { QuantityOfGoods } from 'src/app/constants/QuantityOfGoods';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public numberOfproducts = QuantityOfGoods.MIN_NUMBER_OF_PRODUCTS;
  public isInBasket: boolean = false;
  public disabledMinus: boolean = true;
  public disabledPlus: boolean = false;
  public isLogin: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<DialogComponent>,
    private localStorageService: LocalStorageService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkInBasket();
    this.checkLogin();
  }

  public plusProduct(): void {
    if (this.numberOfproducts < QuantityOfGoods.MAX_NUMBER_OF_PRODUCTS) {
      this.numberOfproducts++;
    }
    if (this.numberOfproducts === QuantityOfGoods.MAX_NUMBER_OF_PRODUCTS) {
      this.disabledPlus = true;
    }
    this.disabledMinus = false;
  }

  public minusProduct(): void {
    if (this.numberOfproducts > QuantityOfGoods.MIN_NUMBER_OF_PRODUCTS) {
      this.numberOfproducts--;
    }
    if (this.numberOfproducts === 1) {
      this.disabledMinus = true;
    }

    this.disabledPlus = false;
  }

  public addToBasket(product: Product): void {
    this.localStorageService.addProductToLocalstorage(
      product,
      this.numberOfproducts
    );
    this.close();
  }

  public goToBasket(): void {
    this.close();
    this.router.navigate(['basket']);
  }

  public close(): void {
    this.dialogRef.close();
  }

  private checkInBasket(): void {
    this.isInBasket = this.localStorageService.checkProductInBasket(this.data);
  }

  private checkLogin() {
    this.isLogin = this.authService.isAuthenticated();
  }
}
