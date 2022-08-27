import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  public onSubmit(): void {
    const value = this.form.value;

    const user: User = {
      email: value.email,
      username: value.username,
      password: value.password,
    };

    this.authService.login(user).subscribe({
      next: () => {
        this.authService.currentUser$.next(user.username);
        this.errorMessage = '';
        this.router.navigate(['']);
      },
      error: (error) => {
        this.errorMessage = `Status error: ${error.status}`;
      },
    });
  }
}
