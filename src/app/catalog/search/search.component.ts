import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public inputSearch: string = '';
  constructor(private router: Router, private filter: FilterService) {}

  public onSearch(): void {
    this.router.navigate(['']);
    this.filter.searchFullText(this.inputSearch);
  }

  public onChangeInput(): void {
    if (!this.inputSearch) {
      this.filter.searchFullText(this.inputSearch);
    }
  }
}
