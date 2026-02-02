import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { User } from '../../models/data/user/user.model';
import { UsersDataService } from '../../shared/services/users-data.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private readonly usersData = inject(UsersDataService);

  // pass-through state if useful
  readonly loading = this.usersData.loading;
  readonly error = this.usersData.error;

  // computed leaderboard view
  readonly leaderboard = computed<User[]>(() => {
    const users = this.usersData.users();
    return [...users].sort((a, b) => b.lifetimePoints - a.lifetimePoints);
  });

}
