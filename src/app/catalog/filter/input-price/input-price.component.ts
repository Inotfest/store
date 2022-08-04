import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss'],
})
export class InputPriceComponent implements OnInit {
  fromPrice = 1;
  toPrice = 10000;

  errorPrice = false;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  public onClickNumbers() {
    if (this.fromPrice > this.toPrice) {
      this.errorPrice = true;
    } else {
      this.errorPrice = false;
      this.filterService.filterPrice(this.fromPrice, this.toPrice);
    }
  }
}
