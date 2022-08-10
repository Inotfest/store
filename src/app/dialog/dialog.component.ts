import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../interfaces/product';
import { LocalStorageService } from '../services/local-storage.service';
import { quantityOfGoods } from '../constants/quantityOfGoods';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public numberOfproducts = quantityOfGoods.MIN_NUMBER_OF_PRODUCTS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<DialogComponent>,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  public plusProduct() {
    if (this.numberOfproducts < quantityOfGoods.MAX_NUMBER_OF_PRODUCTS) {
      this.numberOfproducts++;
    }
  }

  public minusProduct() {
    if (this.numberOfproducts > quantityOfGoods.MIN_NUMBER_OF_PRODUCTS) {
      this.numberOfproducts--;
    }
  }

  public addToBasket(product: Product) {
    this.localStorageService.addProductToLocalstorage(product);
  }

  public close() {
    this.dialogRef.close();
  }
}
