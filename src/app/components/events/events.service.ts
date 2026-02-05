import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { EventsApiService } from '../../shared/services/api-services/events-api.service';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  dataService = inject(DataService);
  api = inject(EventsApiService);

  isLoading = this.dataService.loading;
  error = this.dataService.error;

  readonly events = signal<any[]>([]);
  readonly staleEvents = signal<any[]>([]); // TODO: fix typing
  readonly selectedId = signal<string | null>(null);
  readonly tableRowData = computed(() => this.events());

  readonly selectedEventFromTableRowClick = signal<any>(null);

  load() {
    this.isLoading.set(true);

    this.api.getEvents().subscribe({
      next: (list) => {
  this.events.set(list);
  this.staleEvents.set(list);
  this.isLoading.set(false);

  sessionStorage.setItem(
    'downtown-springfield-poker-events',
    JSON.stringify(list),
  );

  const nextEvent = this.getNextEvent(list);

  if (nextEvent) {
    this.selectedId.set(nextEvent.id);
    this.selectedEventFromTableRowClick.set(nextEvent);
  } else if (list.length > 0) {
    // fallback if everything is in the past
    this.selectedId.set(list[0].id);
    this.selectedEventFromTableRowClick.set(list[0]);
  }
},

      error: (err) => {
        this.isLoading.set(false);
        this.error.set(err);
        console.error('load error', err);
      },
    });
    // select(id: string) {
    //   this.selectedId.set(id)
    // }
  }

  private getNextEvent(list: any[]) { // TODO: fix typing
  const now = DateTime.now();

  return list
    .map(e => ({ e, start: DateTime.fromISO(e.startAt, { setZone: true }) }))
    .filter(x => x.start.isValid && x.start > now)
    .sort((a, b) => a.start.toMillis() - b.start.toMillis())[0]?.e ?? null;
}


  filterFutureEvents() {
    const allEvents = sessionStorage.getItem(
      'downtown-springfield-poker-events',
    );
    this.events.set(JSON.parse(allEvents!));
    this.events.set(
      this.events().filter(
        (e) => DateTime.fromISO(e.startAt, { setZone: true }) > DateTime.now(),
      ),
    );
  }

  filterPastEvents() {
    const allEvents = sessionStorage.getItem(
      'downtown-springfield-poker-events',
    );
    this.events.set(JSON.parse(allEvents!));
    this.events.set(
      this.events().filter(
        (e) => DateTime.fromISO(e.startAt, { setZone: true }) < DateTime.now(),
      ),
    );
  }

  resetFilteredEvents() {
    const allEvents = sessionStorage.getItem(
      'downtown-springfield-poker-events',
    );
    this.events.set(JSON.parse(allEvents!));
  }
}
