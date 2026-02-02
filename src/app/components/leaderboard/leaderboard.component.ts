import { Component, inject, input, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { LEADERBOARD_HEADER_CONFIG } from './config/leaderboard.config';
import { DsplTableComponent } from '../shared/templates/components/tables/dspl-table/dspl-table.component';
import { DsplCardTemplateComponent } from '../shared/templates/dspl-card-template/dspl-card-template.component';
import { UsersApiService } from '../../shared/services/api-services/users-api.service';

@Component({
  selector: 'dspl-leaderboard',
  standalone: true,
  imports: [DsplTableComponent, DsplCardTemplateComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent implements OnInit {
  readonly userDataService = inject(UsersApiService);
  dataService = inject(LeaderboardService);
  title = input<string>();
  tableRowData = this.dataService.tableRowData;
  readonly tableHeaders = LEADERBOARD_HEADER_CONFIG;

  ngOnInit(): void {
    this.userDataService.loadUsers();
  }
}
