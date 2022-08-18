import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { QuantityOfGoods } from 'src/app/constants/QuantityOfGoods';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public numberOfproducts = QuantityOfGoods.MIN_NUMBER_OF_PRODUCTS;
  public isInBasket: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<DialogComponent>,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkInBasket();
  }

  public plusProduct(): void {
    if (this.numberOfproducts < QuantityOfGoods.MAX_NUMBER_OF_PRODUCTS) {
      this.numberOfproducts++;
    }
  }

  public minusProduct(): void {
    if (this.numberOfproducts > QuantityOfGoods.MIN_NUMBER_OF_PRODUCTS) {
      this.numberOfproducts--;
    }
  }

  public addToBasket(product: Product): void {
    this.localStorageService.addProductToLocalstorage(
      product,
      this.numberOfproducts
    );
    this.close();
  }

  public checkInBasket(): void {
    this.isInBasket = this.localStorageService.checkProductInBasket(this.data);
  }

  public goToBasket() {
    this.close();
    this.router.navigate(['basket']);
  }

  public close(): void {
    this.dialogRef.close();
  }
}
