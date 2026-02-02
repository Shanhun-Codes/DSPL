import { Component, inject, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { UsersDataService } from '../../shared/services/users-data.service';
import { DsplTableComponent } from '../shared/dspl-table/dspl-table.component';
import { LEADERBOARD_HEADER_CONFIG } from './config/leaderboard.config';

@Component({
  selector: 'dspl-leaderboard',
  standalone: true,
  imports: [DsplTableComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent implements OnInit {
  readonly userDataService = inject(UsersDataService)
  lbUsers = inject(LeaderboardService);

  readonly tableHeaders = LEADERBOARD_HEADER_CONFIG

  ngOnInit(): void {
    this.userDataService.loadUsers()
  }
}
