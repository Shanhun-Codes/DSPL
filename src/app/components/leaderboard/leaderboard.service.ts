import { computed, inject, Injectable } from '@angular/core';
import { UsersDataService } from '../../shared/services/users-data.service';
import { LeaderboardRowDto } from './config/leaderboard-DTO.model';
import { UserApiModel } from '../../shared/models/data/user/user.model';
import { toLeaderboardRowDto } from './leaderboard.mapper';

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class LeaderboardService {
  private readonly usersData = inject(UsersDataService);

  readonly loading = this.usersData.loading;
  readonly error = this.usersData.error;

  readonly leaderboard = computed<LeaderboardRowDto[]>(() => {
    const users = this.usersData.users() as UserApiModel[];

    return users
      .map(toLeaderboardRowDto)
      .sort((a, b) => b.lifetimePoints - a.lifetimePoints);
  });
}