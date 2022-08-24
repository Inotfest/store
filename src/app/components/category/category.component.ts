import { Component, Input } from '@angular/core';
import { SelectObject } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class СategoryComponent {
  @Input() categoryList: SelectObject[];
}
