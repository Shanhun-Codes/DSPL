import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({ providedIn: 'root' })
export class EventsApiService {
  private readonly http = inject(HttpClient);
  readonly dataService = inject(DataService)
  baseUrl = this.dataService.baseUrl

  getEvents(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl()}/tournament-data.json`)
  }
}
