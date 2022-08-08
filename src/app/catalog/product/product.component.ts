import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;


  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.matDialog.open(DialogComponent, {
      data: this.product,
      width: '50%',
      height: '75%',
    });
  }
}
