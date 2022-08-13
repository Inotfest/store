import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public numberOfOrders = 0;

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

  public reloadPage() {
    location.reload();
  }

  private checkBasket() {
    const number = this.localStorageService.checkNumberOfGoods();
    if (number) {
      this.numberOfOrders = number;
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
