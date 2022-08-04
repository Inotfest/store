import { SelectOptions } from '../interfaces/filter';

export const Catalog: SelectOptions = {
  brand: [
    { value: 'nokia', title: 'Nokia', type: 'brand' },
    { value: 'apple', title: 'Apple', type: 'brand' },
    { value: 'samsung', title: 'Samsung', type: 'brand' },
    { value: 'xiaomi', title: 'Xiaomi', type: 'brand' },
    { value: 'motorola', title: 'Motorola', type: 'brand' },
  ],
  color: [
    { value: 'blue', title: 'Blue', type: 'color' },
    {
      value: 'white',
      title: 'White',
      type: 'color',
    },
    {
      value: 'gray',
      title: 'Gray',
      type: 'color',
    },
    {
      value: 'chocoal',
      title: 'Chocoal',
      type: 'color',
    },
    {
      value: 'graphite',
      title: 'Graphite',
      type: 'color',
    },
    {
      value: 'black',
      title: 'Black',
      type: 'color',
    },
  ],
  diagonal: [
    {
      value: { minValue: 4.1, maxValue: 4.5 },
      title: '4.1" - 4.5"',
      type: 'diagonal',
    },
    {
      value: { minValue: 4.6, maxValue: 5 },
      title: '4.6" - 5"',
      type: 'diagonal',
    },
    {
      value: { minValue: 5.1, maxValue: 5.5 },
      title: '5.1" - 5.5"',
      type: 'diagonal',
    },
    {
      value: { minValue: 5.55, maxValue: 6 },
      title: '5.55" - 6"',
      type: 'diagonal',
    },
    {
      value: { minValue: 6, maxValue: 10 },
      title: '6" - 10"',
      type: 'diagonal',
    },
  ],
  ram: [
    { value: 2, title: '2', type: 'ram' },
    { value: 3, title: '3', type: 'ram' },
    { value: 4, title: '4', type: 'ram' },
    { value: 6, title: '6', type: 'ram' },
    { value: 8, title: '8', type: 'ram' },
    { value: 10, title: '10', type: 'ram' },
    { value: 12, title: '12', type: 'ram' },
  ],
};
