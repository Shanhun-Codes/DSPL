import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { DataService } from './data.service';
import { UserDto } from '../../shared/DTOs/user.model';
import { mapUsersDtoToUsers } from '../../components/leaderboard/leaderboard.mapper';

@Injectable({ providedIn: 'root' })
export class UsersDataService {
  private readonly http = inject(HttpClient);
  private readonly dataService = inject(DataService);
  private readonly baseUrl = this.dataService.baseUrl;

  private readonly _users = signal<UserDto[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  loadUsers() {
    this._loading.set(true);
    this._error.set(null);

    this.http.get<UserDto[]>(`${this.baseUrl()}/user-data.json`).subscribe({
      next: (dtos) => this._users.set(mapUsersDtoToUsers(dtos)),
      error: (err) => this._error.set(err?.message ?? 'Failed to load users'),
      complete: () => this._loading.set(false),
    });
  }
}
