import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { paramsOfCategory } from 'src/app/constants/Catalog';
import { Product } from 'src/app/interfaces/product';
import { HttpService } from 'src/app/services/http.service';
import { InputPrice } from '../../constants/Price';
import { DialogNotificationComponent } from '../dialog-notification/dialog-notification.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  public colorList: string[] = paramsOfCategory.color;
  public brandList: string[] = paramsOfCategory.brand;

  private subscription$ = new Subscription();

  @ViewChild('formDirective') private formDirective: NgForm;

  constructor(private httpService: HttpService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(InputPrice.MIN_PRICE),
        Validators.max(InputPrice.MAX_RPICE),
      ]),
      brand: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      photo: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      photo2: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      photo3: new FormControl('', [Validators.maxLength(100)]),
      diagonal: new FormControl('', [
        Validators.required,
        Validators.min(4.1),
        Validators.max(10),
      ]),
      ram: new FormControl(0, [
        Validators.required,
        Validators.min(2),
        Validators.max(12),
      ]),
      memory: new FormControl('', [
        Validators.required,
        Validators.min(32),
        Validators.max(512),
      ]),
      battery: new FormControl('', [
        Validators.required,
        Validators.min(1000),
        Validators.max(9000),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(400),
      ]),
    });
  }

  public submit(): void {
    const value = this.form.value;

    const objProduct: Product = {
      name: value.name,
      price: value.price,
      brand: value.brand,
      color: value.color,
      photo: value.photo,
      photo2: value.photo2,
      photo3: value.photo3,
      diagonal: value.diagonal,
      ram: value.ram,
      memory: value.memory,
      battery: value.battery,
      description: value.description,
    };

    this.subscription$.add(
      this.httpService.addProduct(objProduct).subscribe({
        next: () => {
          this.openDialog('Product added');
          this.formDirective.resetForm();
        },
        error: (error) => this.openDialog(error.message),
      })
    );
  }

  private openDialog(text: string): void {
    this.matDialog.open(DialogNotificationComponent, {
      data: text,
      width: '25%',
      height: '25%',
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
