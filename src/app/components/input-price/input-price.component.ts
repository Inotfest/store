import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { InputPrice } from 'src/app/constants/Price';

@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss'],
})
export class InputPriceComponent {
  public fromPrice: number = InputPrice.MIN_PRICE;
  public toPrice: number = InputPrice.MAX_RPICE;

  public errorPrice: boolean = false;

  constructor(private filterService: FilterService) {}

  public onClickNumbers(): void {
    if (this.fromPrice >= this.toPrice) {
      this.errorPrice = true;
    } else {
      this.errorPrice = false;
      this.filterService.filterPrice(this.fromPrice, this.toPrice);
    }
  }
}
