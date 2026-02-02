import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly baseUrl = signal<string>('/assets/data');
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
}
