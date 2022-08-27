import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { TokenData } from '../constants/Token';
import { TokenDate, TokenKey, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  public login(data: User) {
    return this.http
      .post<TokenKey>(`http://localhost:3000/login`, data)
      .pipe(tap(this.setToken));
  }

  public register(data: User) {
    return this.http
      .post<TokenKey>(`http://localhost:3000/register`, data)
      .pipe(tap(this.setToken));
  }

  public logout(): void {
    this.currentUser$.next('');
    this.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.token();
  }

  public getEmailUser(): string {
    const jsonToken = this.token();

    if (jsonToken) {
      const objToken: TokenDate = JSON.parse(jsonToken);
      return objToken.username;
    }
    return '';
  }

  private token() {
    const jsonToken = localStorage.getItem(TokenData.KEY);
    if (jsonToken) {
      const objToken: TokenDate = JSON.parse(jsonToken);
      const initilDateToken = objToken.date;
      const timeDifference = Math.ceil(
        (new Date().getTime() - new Date(initilDateToken).getTime()) / 1000 / 60
      );

      if (timeDifference < TokenData.LIFITIME) {
        return jsonToken;
      }
    }

    this.logout();
    return '';
  }

  private setToken(response: TokenKey | null): void {
    if (response) {
      const tokenDate: TokenDate = {
        token: response.accessToken,
        date: new Date(),
        username: response.user.username,
      };
      localStorage.setItem(TokenData.KEY, JSON.stringify(tokenDate));
    } else {
      localStorage.removeItem(TokenData.KEY);
    }
  }
}
