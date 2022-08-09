import { SelectOptions } from '../interfaces/filter';

export enum FilterType {
  SEARCH = 'search',
  CATEGORY = 'category',
  CATEGORY_RANGE = 'category_range',
  PRICE = 'price',
}

enum ProductCategory {
  BRAND = 'brand',
  COLOR = 'color',
  DIAGONAL = 'diagonal',
  RAM = 'ram',
  BATTERY = 'battery',
  MEMORY = 'memory',
}

export const Catalog: SelectOptions = {
  brand: [
    {
      value: 'nokia',
      title: 'Nokia',
      type: ProductCategory.BRAND,
    },
    {
      value: 'apple',
      title: 'Apple',
      type: ProductCategory.BRAND,
    },
    {
      value: 'samsung',
      title: 'Samsung',
      type: ProductCategory.BRAND,
    },
    {
      value: 'xiaomi',
      title: 'Xiaomi',
      type: ProductCategory.BRAND,
    },
    {
      value: 'motorola',
      title: 'Motorola',
      type: ProductCategory.BRAND,
    },
    {
      value: 'infinix',
      title: 'Infinix',
      type: ProductCategory.BRAND,
    },
  ],
  color: [
    {
      value: 'blue',
      title: 'Blue',
      type: ProductCategory.COLOR,
    },
    {
      value: 'white',
      title: 'White',
      type: ProductCategory.COLOR,
    },
    {
      value: 'gray',
      title: 'Gray',
      type: ProductCategory.COLOR,
    },
    {
      value: 'chocoal',
      title: 'Chocoal',
      type: ProductCategory.COLOR,
    },
    {
      value: 'graphite',
      title: 'Graphite',
      type: ProductCategory.COLOR,
    },
    {
      value: 'black',
      title: 'Black',
      type: ProductCategory.COLOR,
    },
  ],
  diagonal: [
    {
      value: { minValue: 4.1, maxValue: 4.5 },
      title: '4.1" - 4.5"',
      type: ProductCategory.DIAGONAL,
    },
    {
      value: { minValue: 4.6, maxValue: 5 },
      title: '4.6" - 5"',
      type: ProductCategory.DIAGONAL,
    },
    {
      value: { minValue: 5.1, maxValue: 5.5 },
      title: '5.1" - 5.5"',
      type: ProductCategory.DIAGONAL,
    },
    {
      value: { minValue: 5.55, maxValue: 6 },
      title: '5.55" - 6"',
      type: ProductCategory.DIAGONAL,
    },
    {
      value: { minValue: 6, maxValue: 10 },
      title: '6" - 10"',
      type: ProductCategory.DIAGONAL,
    },
  ],
  battery: [
    {
      value: { minValue: 3000, maxValue: 3900 },
      title: '3000 - 3900 mAh',
      type: ProductCategory.BATTERY,
    },
    {
      value: { minValue: 4000, maxValue: 4900 },
      title: '4000 - 4900 mAh',
      type: ProductCategory.BATTERY,
    },
    {
      value: { minValue: 5000, maxValue: 5900 },
      title: '5000 - 5900 mAh',
      type: ProductCategory.BATTERY,
    },
    {
      value: { minValue: 6000, maxValue: 8900 },
      title: '6000 - 8900 mAh',
      type: ProductCategory.BATTERY,
    },
  ],
  ram: [
    {
      value: 3,
      title: '3',
      type: ProductCategory.RAM,
    },
    {
      value: 4,
      title: '4',
      type: ProductCategory.RAM,
    },
    {
      value: 6,
      title: '6',
      type: ProductCategory.RAM,
    },
    {
      value: 8,
      title: '8',
      type: ProductCategory.RAM,
    },
    {
      value: 10,
      title: '10',
      type: ProductCategory.RAM,
    },
    {
      value: 12,
      title: '12',
      type: ProductCategory.RAM,
    },
  ],
  memory: [
    {
      value: 32,
      title: '32 GB',
      type: ProductCategory.RAM,
    },
    {
      value: 64,
      title: '64 GB',
      type: ProductCategory.RAM,
    },
    {
      value: 128,
      title: '128 GB',
      type: ProductCategory.RAM,
    },
    {
      value: 256,
      title: '256 GB',
      type: ProductCategory.RAM,
    },
    {
      value: 512,
      title: '512 GB',
      type: ProductCategory.RAM,
    },
  ],
};
