import { NgPlural } from '@angular/common';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { EventsService } from '../events/events.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterForEventService implements OnInit {
  // eventService = inject(EventsService)
  selectedRowId = signal<string | null>(null);
  // eventsInstorage = sessionStorage.getItem('downtown-springfield-poker-events');
  // selectEventOptions = signal<any>(null)


ngOnInit(): void {
  // this.selectEventOptions.set(this.eventService.events())
}


}
