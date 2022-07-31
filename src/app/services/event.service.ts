import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventProduct$ = new BehaviorSubject<string>(environment.jsonUrl);

  constructor() {}

  eventSearch(inputData: string) {
    this.eventProduct$.next(`${environment.jsonUrl}?q=${inputData}`);
  }
}
