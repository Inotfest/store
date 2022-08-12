import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { InputPrice } from 'src/app/constants/Price';

@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss'],
})
export class InputPriceComponent implements OnInit {
  public fromPrice = InputPrice.MIN_PRICE;
  public toPrice = InputPrice.MAX_RPICE;

  public errorPrice = false;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  public onClickNumbers() {
    if (this.fromPrice >= this.toPrice) {
      this.errorPrice = true;
    } else {
      this.errorPrice = false;
      this.filterService.filterPrice(this.fromPrice, this.toPrice);
    }
  }
}
