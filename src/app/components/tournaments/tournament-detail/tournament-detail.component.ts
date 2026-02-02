import { Component, signal } from '@angular/core';
import { TournamentDto } from '../config/tournament-DTO.model';

@Component({
  selector: 'dspl-tournament-detail-card',
  standalone: true,
  imports: [],
  templateUrl: './tournament-detail.component.html',
  styleUrl: './tournament-detail.component.scss',
})
export class TournamentComponent {
  readonly tournament = signal<TournamentDto | null>(null);
}
