import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { paramsOfCategory } from 'src/app/constants/Catalog';
import { Product } from 'src/app/interfaces/product';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      brand: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),
      photo2: new FormControl('', [Validators.required]),
      photo3: new FormControl(''),
      diagonal: new FormControl('', [
        Validators.required,
        Validators.min(1),
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

    this.formDirective.resetForm();

    this.subscription$.add(this.httpService.addProduct(objProduct).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
