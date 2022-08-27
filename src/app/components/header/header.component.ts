import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public numberOfOrders: number = 0;
  public user = '';

  private subscription$ = new Subscription();

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.localStorageService.orders$.subscribe(
        (res) => (this.numberOfOrders = res)
      )
    );
    this.subscription$.add(
      this.authService.currentUser$.subscribe((res) => (this.user = res))
    );
    this.checkBasket();
    this.checkUser();
  }

  public logout() {
    this.authService.logout();
  }

  private checkBasket(): void {
    const number = this.localStorageService.checkNumberOfGoods();
    if (number) {
      this.numberOfOrders = number;
    }
  }

  private checkUser() {
    this.user = this.authService.getEmailUser();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
