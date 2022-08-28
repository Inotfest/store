export interface Product {
  id?: number;
  name: string;
  price: number;
  brand: string;
  color: string;
  photo: string;
  photo2: string;
  diagonal: number;
  ram: number;
  memory: number;
  battery: number;
  description: string;
  photo3?: string;
}

export interface Invoice {
  product: Product;
  numberOfproducts: number;
}
