import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;

  public photo2: boolean = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialog(): void {
    this.matDialog.open(DialogComponent, {
      data: this.product,
      width: '60%',
      height: '75%',
    });
  }

  public onMouseEnter(): void {
    this.photo2 = true;
  }

  public onMouseLeave(): void {
    this.photo2 = false;
  }
}
