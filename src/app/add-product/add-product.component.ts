import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { paramsOfCategory } from '../constants/Catalog';
import { Product } from '../interfaces/product';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  public form: FormGroup;

  public colorList: string[] = paramsOfCategory.color;
  public brandList: string[] = paramsOfCategory.brand;

  constructor(private httpService: HttpService) {
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
      photoBack: new FormControl('', [Validators.required]),
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
    const objProduct: Product = {
      name: this.form.value.name,
      price: this.form.value.price,
      brand: this.form.value.brand,
      color: this.form.value.color,
      photo: this.form.value.photo,
      photoBack: this.form.value.photoBack,
      diagonal: this.form.value.diagonal,
      ram: this.form.value.ram,
      memory: this.form.value.memory,
      battery: this.form.value.battery,
      description: this.form.value.description,
    };

    this.httpService
      .addProduct(objProduct)
      .subscribe((res) => console.log(res));
    location.reload();
  }
}
