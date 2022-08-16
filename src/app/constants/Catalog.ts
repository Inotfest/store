import { SelectOptions } from '../interfaces/filter';

export enum FilterType {
  SEARCH = 'search',
  CATEGORY = 'category',
  CATEGORY_RANGE = 'category_range',
  PRICE = 'price',
}

enum Categories {
  BRAND = 'brand',
  COLOR = 'color',
  DIAGONAL = 'diagonal',
  BATTERY = 'battery',
  RAM = 'ram',
  MEMORY = 'memory',
}

enum Brand {
  NOKIA = 'nokia',
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  XIAOMI = 'xiaomi',
  MOTOROLA = 'motorola',
  INFINIX = 'infinix',
}

enum Color {
  BLUE = 'blue',
  WHITE = 'white',
  GRAY = 'gray',
  CHOCOAL = 'chocoal',
  GRAPHITE = 'graphite',
  BLACK = 'black',
  BROWN = 'brown',
}

export const paramsOfCategory = {
  [Categories.BRAND]: [
    Brand.NOKIA,
    Brand.APPLE,
    Brand.SAMSUNG,
    Brand.XIAOMI,
    Brand.MOTOROLA,
    Brand.INFINIX,
  ],
  [Categories.COLOR]: [
    Color.BLUE,
    Color.WHITE,
    Color.GRAY,
    Color.GRAPHITE,
    Color.BLACK,
    Color.BROWN,
  ],
};

export const Catalog: SelectOptions = {
  [Categories.BRAND]: [
    {
      value: Brand.NOKIA,
      title: 'Nokia',
      type: Categories.BRAND,
    },
    {
      value: Brand.APPLE,
      title: 'Apple',
      type: Categories.BRAND,
    },
    {
      value: Brand.SAMSUNG,
      title: 'Samsung',
      type: Categories.BRAND,
    },
    {
      value: Brand.XIAOMI,
      title: 'Xiaomi',
      type: Categories.BRAND,
    },
    {
      value: Brand.MOTOROLA,
      title: 'Motorola',
      type: Categories.BRAND,
    },
    {
      value: Brand.INFINIX,
      title: 'Infinix',
      type: Categories.BRAND,
    },
  ],
  [Categories.COLOR]: [
    {
      value: Color.BLUE,
      title: 'Blue',
      type: Categories.COLOR,
    },
    {
      value: Color.WHITE,
      title: 'White',
      type: Categories.COLOR,
    },
    {
      value: Color.GRAY,
      title: 'Gray',
      type: Categories.COLOR,
    },
    {
      value: Color.CHOCOAL,
      title: 'Chocoal',
      type: Categories.COLOR,
    },
    {
      value: Color.GRAPHITE,
      title: 'Graphite',
      type: Categories.COLOR,
    },
    {
      value: Color.BLACK,
      title: 'Black',
      type: Categories.COLOR,
    },
    {
      value: Color.BROWN,
      title: 'Brown',
      type: Categories.COLOR,
    },
  ],
  [Categories.DIAGONAL]: [
    {
      value: { minValue: 4.1, maxValue: 4.5 },
      title: '4.1" - 4.5"',
      type: Categories.DIAGONAL,
    },
    {
      value: { minValue: 4.6, maxValue: 5 },
      title: '4.6" - 5"',
      type: Categories.DIAGONAL,
    },
    {
      value: { minValue: 5.1, maxValue: 5.5 },
      title: '5.1" - 5.5"',
      type: Categories.DIAGONAL,
    },
    {
      value: { minValue: 5.55, maxValue: 6 },
      title: '5.55" - 6"',
      type: Categories.DIAGONAL,
    },
    {
      value: { minValue: 6, maxValue: 10 },
      title: '6" - 10"',
      type: Categories.DIAGONAL,
    },
  ],
  [Categories.BATTERY]: [
    {
      value: { minValue: 3000, maxValue: 3900 },
      title: '3000 - 3900 mAh',
      type: Categories.BATTERY,
    },
    {
      value: { minValue: 4000, maxValue: 4900 },
      title: '4000 - 4900 mAh',
      type: Categories.BATTERY,
    },
    {
      value: { minValue: 5000, maxValue: 5900 },
      title: '5000 - 5900 mAh',
      type: Categories.BATTERY,
    },
    {
      value: { minValue: 6000, maxValue: 8900 },
      title: '6000 - 8900 mAh',
      type: Categories.BATTERY,
    },
  ],
  [Categories.RAM]: [
    {
      value: 2,
      title: '2',
      type: Categories.RAM,
    },
    {
      value: 3,
      title: '3',
      type: Categories.RAM,
    },
    {
      value: 4,
      title: '4',
      type: Categories.RAM,
    },
    {
      value: 6,
      title: '6',
      type: Categories.RAM,
    },
    {
      value: 8,
      title: '8',
      type: Categories.RAM,
    },
    {
      value: 10,
      title: '10',
      type: Categories.RAM,
    },
    {
      value: 12,
      title: '12',
      type: Categories.RAM,
    },
  ],
  [Categories.MEMORY]: [
    {
      value: 32,
      title: '32 GB',
      type: Categories.RAM,
    },
    {
      value: 64,
      title: '64 GB',
      type: Categories.RAM,
    },
    {
      value: 128,
      title: '128 GB',
      type: Categories.RAM,
    },
    {
      value: 256,
      title: '256 GB',
      type: Categories.RAM,
    },
    {
      value: 512,
      title: '512 GB',
      type: Categories.RAM,
    },
  ],
};
