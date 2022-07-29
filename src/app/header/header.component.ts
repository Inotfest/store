import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  inputSearch = '';

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  onSearch() {
    this.http.searchInData(this.inputSearch);
  }
}
