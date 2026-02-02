import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { TournamentsApiService } from '../../shared/services/api-services/tournaments-api.service';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  dataService = inject(DataService);
  api = inject(TournamentsApiService);
  isLoading = this.dataService.loading;
  error = this.dataService.error;
  readonly tournaments = signal<any[]>([]);
  readonly selectedId = signal<string | null>(null);
  readonly tableRowData = computed(() => this.tournaments());
  
  load() {
    this.isLoading.set(true);

    this.api.getTournaments().subscribe({
      next: (list) => {
        this.tournaments.set(list);
        this.isLoading.set(false);
        console.log('tournaments loaded', list);

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
}
