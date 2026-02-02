import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { DataService } from '../data.service';
import { UserDto } from '../../DTOs/user.model';
import { mapUsersDtoToUsers } from '../../../components/leaderboard/leaderboard.mapper';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  private readonly http = inject(HttpClient);
  private readonly dataService = inject(DataService);
  private readonly baseUrl = this.dataService.baseUrl;

  private readonly _users = signal<UserDto[]>([]);


  readonly users = this._users.asReadonly();
  readonly error = this.dataService.error
  readonly loading = this.dataService.loading

  loadUsers() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<UserDto[]>(`${this.baseUrl()}/user-data.json`).subscribe({
      next: (dtos) => this._users.set(mapUsersDtoToUsers(dtos)),
      error: (err) => this.error.set(err?.message ?? 'Failed to load users'),
      complete: () => this.loading.set(false),
    });
  }
}
