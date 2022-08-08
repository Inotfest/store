import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../interfaces/product';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public numberOfproducts = 1;

  private maxProducts = 10;
  private minProducts = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<DialogComponent>,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  public plusProduct() {
    if (this.numberOfproducts < this.maxProducts) {
      this.numberOfproducts++;
    }
  }

  public minusProduct() {
    if (this.numberOfproducts > this.minProducts) {
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
