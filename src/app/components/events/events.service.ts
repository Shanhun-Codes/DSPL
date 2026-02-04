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
  readonly selectedId = signal<string | null>(null);
  readonly tableRowData = computed(() => this.events());

  load() {
    this.isLoading.set(true);

    this.api.getEvents().subscribe({
      next: (list) => {
        this.events.set(list);
        this.isLoading.set(false);
        sessionStorage.setItem(
          'downtown-springfield-poker-events',
          JSON.stringify(this.events()),
        );
        console.log('Events loaded', list);

        if (this.selectedId() === null && list.length > 0) {
          this.selectedId.set(list[0].id);
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
