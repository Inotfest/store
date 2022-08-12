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

  public photoBack = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialog() {
    this.matDialog.open(DialogComponent, {
      data: this.product,
      width: '50%',
      height: '75%',
    });
  }

  public onMouseEnter() {
    this.photoBack = true;
  }

  public onMouseLeave() {
    this.photoBack = false;
  }
}
