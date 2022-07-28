import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(public http: HttpService) {}

  ngOnInit(): void {}

  onChacngeBrand(event: any) {
    this.http.filterDataByBrend(event);
  }
}
