import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  inputSearch = '';
  
  constructor(private event: EventService) {}

  ngOnInit(): void {}

  onSearch() {
   this.event.eventSearch(this.inputSearch);
  }
}
