import { inject, Injectable, signal } from '@angular/core';
import { DataService } from './data.service';
import { RankApiService } from './api-services/rank-api.service';
import { Rank } from '../models/data/shared/rank.model';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  readonly dataService = inject(DataService);
  readonly api = inject(RankApiService);

  readonly isLoading = this.dataService.loading;
  readonly error = this.dataService.error;

  readonly ranks = signal<Rank[]>([]);

  loadRanks() {
    this.isLoading.set(true);

    this.api.getRanks().subscribe({
      next: (list) => {
        this.ranks.set(list);
        this.isLoading.set(false);
        console.log('Ranks:', list);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.error.set(err);
        console.error('load error', err);
      },
    });
  }

  storeRanksInSessionStorage() {
    sessionStorage.setItem('ranks', JSON.stringify(this.ranks()));
  }
}
