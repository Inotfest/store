import { Invoice } from './product';

export interface OrderForm {
  firstName: string;
  lastName: string;
  region: string;
  city: string;
  address: string;
  phoneNumber: number;
  products: Array<Invoice>;
  email?: string;
}
