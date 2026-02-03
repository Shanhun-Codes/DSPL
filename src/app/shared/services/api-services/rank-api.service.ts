import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Rank } from '../../models/data/shared/rank.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RankApiService {
  readonly http = inject(HttpClient);
  readonly dataService = inject(DataService);
  readonly baseUrl = this.dataService.baseUrl;

   getRanks(): Observable<Rank[]> {
    const baseUrl = this.dataService.baseUrl(); 
    return this.http.get<Rank[]>(`${baseUrl}/ranks`);
  }
}
