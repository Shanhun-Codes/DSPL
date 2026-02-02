import {
  Component,
  EventEmitter,
  inject,
  input,
  OnInit,
  Output,
} from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { TournamentsService } from '../tournaments.service';
import { DsplCardTemplateComponent } from '../../shared/templates/dspl-card-template/dspl-card-template.component';
import { DsplTableComponent } from '../../shared/templates/components/tables/dspl-table/dspl-table.component';
import { TOURNAMENT_HEADER_CONFIG } from '../config/tournaments.config';
import { TOURNAMENT_CELL_DEFS } from '../config/tournaments.table-def';

@Component({
  selector: 'dspl-tournament-selector',
  standalone: true,
  imports: [DsplCardTemplateComponent, DsplTableComponent],
  templateUrl: './tournament-selector.component.html',
  styleUrl: './tournament-selector.component.scss',
})
export class TournamentSelectorComponent implements OnInit {
  dataSevice = inject(DataService);
  tournamentSelectorService = inject(TournamentsService);
  readonly tournaments = this.tournamentSelectorService.tableRowData
  readonly selectedId = input<string | null>();
  title = input<string>('');
  readonly tableHeaders = TOURNAMENT_HEADER_CONFIG;
  readonly defs = TOURNAMENT_CELL_DEFS

  @Output() select = new EventEmitter<string>(); // change this to the new output method

  ngOnInit(): void {
    this.tournamentSelectorService.load()
    console.log(this.tournaments());

  }
}
