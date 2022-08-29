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

  public singin(path: string, data: User) {
    return this.http.post<TokenKey>(path, data).pipe(
      tap((res) => {
        this.setToken(res);
      })
    );
  }

  public logout(): void {
    this.currentUser$.next('');
    this.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.token();
  }

  public getUser(): string {
    const jsonToken = this.token();

    if (jsonToken) {
      const objToken: TokenDate = JSON.parse(jsonToken);
      return objToken.username;
    }
    return '';
  }

  private token(): string {
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

      this.currentUser$.next(response.user.username);
    } else {
      localStorage.removeItem(TokenData.KEY);
    }
  }
}
