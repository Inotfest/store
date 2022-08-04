import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  inputSearch = '';

  constructor(private filter: FilterService) {}

  ngOnInit(): void {}

  public onSearch() {
    this.filter.searchFullText(this.inputSearch);
  }
}
