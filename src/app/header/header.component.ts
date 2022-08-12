import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public inputSearch = '';
  public numberOfOrders = 0;

  private subscription$ = new Subscription();

  constructor(
    private filter: FilterService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.localStorageService.orders$.subscribe(
        (res) => (this.numberOfOrders = res)
      )
    );
    this.checkBasket();
  }

  public onSearch() {
    this.router.navigate(['']);
    this.filter.searchFullText(this.inputSearch);
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
