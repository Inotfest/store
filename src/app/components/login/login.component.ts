import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { URL } from 'src/app/constants/Url';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  public errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  public clearError(): void {
    this.errorMessage = '';
  }

  public onSubmit(): void {
    const value = this.form.value;
    const path = URL.JSON + URL.LOGIN;

    const user: User = {
      email: value.email,
      username: value.username,
      password: value.password,
    };

    this.authService.singin(path, user).subscribe({
      next: () => {
        this.errorMessage = '';
        this.router.navigate(['']);
      },
      error: (error) => {
        if (error.status === 400) {
          this.errorMessage = `Wrong email or password`;
        }
      },
    });
  }
}
