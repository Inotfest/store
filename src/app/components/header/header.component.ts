import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public numberOfOrders: number = 0;

  private subscription$ = new Subscription();

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.localStorageService.orders$.subscribe(
        (res) => (this.numberOfOrders = res)
      )
    );
    this.checkBasket();
  }

  private checkBasket(): void {
    const number = this.localStorageService.checkNumberOfGoods();
    if (number) {
      this.numberOfOrders = number;
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
