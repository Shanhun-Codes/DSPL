import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterForEventService {
  selectedRowId = signal<string | null>(null);
  eventsInstorage = sessionStorage.getItem('downtown-springfield-poker-events');

  showSelectedEventInOptionOnTableRowClick() {
    const id = this.selectedRowId();
    if (!id) return null;

    const raw = sessionStorage.getItem('downtown-springfield-poker-events');
    if (!raw) return null;

    const events = JSON.parse(raw);
    return events.find((e: any) => e.id === id) ?? null;
  }
}
