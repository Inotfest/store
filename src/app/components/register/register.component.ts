import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { URL } from 'src/app/constants/Url';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      username: new FormControl(null, [
        Validators.required,
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
    const path = URL.JSON + URL.REGISTER;

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
        this.errorMessage = `Status error: ${error.status}`;
      },
    });
  }
}
