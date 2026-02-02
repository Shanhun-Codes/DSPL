import { Component, inject, input } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'dspl-player-table',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './player-table.component.html',
  styleUrl: './player-table.component.scss'
})
export class PlayerTableComponent {

lbUsers = inject(LeaderboardService)
}
