export type valueProduct = string | number | ValueObjectParameters;

export interface OptionsObjectFilter {
  type: string;
  value: valueProduct;
}

export interface SelectOptions {
  [key: string | symbol]: Array<SelectObject>;
}

interface ValueObjectParameters {
  minValue: number;
  maxValue: number;
}

export interface SelectObject {
  value:
    | string
    | number
    | {
        minValue: number;
        maxValue: number;
      };
  title: string;
  type: string;
}
