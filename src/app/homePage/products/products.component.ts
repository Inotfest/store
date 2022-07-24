import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy M32 6/128GB Light Blue',
      price: 300,
      brand: 'samsung',
      color: 'blue',
      releaseYear: 2022,
      photo: 'https://content2.rozetka.com.ua/goods/images/big/189581882.jpg',
    },
    {
      id: 2,
      name: 'Apple iPhone 11 128GB White Slim Box',
      price: 500,
      brand: 'apple',
      color: 'white',
      releaseYear: 2022,
      photo: 'https://content2.rozetka.com.ua/goods/images/big/37399329.jpg',
    },
    {
      id: 1,
      name: 'Samsung Galaxy M32 6/128GB Light Blue',
      price: 300,
      brand: 'samsung',
      color: 'blue',
      releaseYear: 2022,
      photo: 'https://content2.rozetka.com.ua/goods/images/big/189581882.jpg',
    },
    {
      id: 2,
      name: 'Apple iPhone 11 128GB White Slim Box',
      price: 500,
      brand: 'apple',
      color: 'white',
      releaseYear: 2022,
      photo: 'https://content2.rozetka.com.ua/goods/images/big/37399329.jpg',
    },
    {
      id: 1,
      name: 'Samsung Galaxy M32 6/128GB Light Blue',
      price: 300,
      brand: 'samsung',
      color: 'blue',
      releaseYear: 2022,
      photo: 'https://content2.rozetka.com.ua/goods/images/big/189581882.jpg',
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
