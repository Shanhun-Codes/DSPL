import { Component, inject, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { UsersDataService } from '../../shared/services/users-data.service';
import { PlayerTableComponent } from "./player-table/player-table.component";

@Component({
  selector: 'dspl-leaderboard',
  standalone: true,
  imports: [PlayerTableComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent implements OnInit {
  readonly userDataService = inject(UsersDataService)
  lbUsers = inject(LeaderboardService);

  ngOnInit(): void {
    this.userDataService.loadUsers()
  }
}
