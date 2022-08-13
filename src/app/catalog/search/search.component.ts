import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public inputSearch = '';
  constructor(private router: Router, private filter: FilterService) {}

  ngOnInit(): void {}

  public onSearch() {
    this.router.navigate(['']);
    this.filter.searchFullText(this.inputSearch);
  }

  public onChangeInput() {
    if (!this.inputSearch) {
      this.filter.searchFullText(this.inputSearch);
    }
  }
}
