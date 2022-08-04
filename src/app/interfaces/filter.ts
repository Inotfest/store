export type valueProduct = string | number | ValueObjectParameters;

export interface OptionsObjectFilter {
  type: string;
  value: any;
  category: string;
}

export interface SelectOptions {
  [key: string]: Array<SelectObject>;
}

export interface SelectObject {
  value: valueProduct;
  title: string;
  type: string;
}

export interface ValueObjectParameters {
  maxValue: number;
  minValue: number;
}
