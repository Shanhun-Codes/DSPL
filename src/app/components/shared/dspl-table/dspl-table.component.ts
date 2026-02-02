import { Component, input } from '@angular/core';
import { PlayerComponent } from '../../leaderboard/player/player.component';
import { TableHeader } from '../models/table-header.model';
import { DsplTableRowComponent } from "../dspl-table-row/dspl-table-row.component";

@Component({
  selector: 'dspl-table',
  standalone: true,
  imports: [DsplTableRowComponent],
  templateUrl: './dspl-table.component.html',
  styleUrl: './dspl-table.component.scss',
  host: { style: 'display: contents' },
})
export class DsplTableComponent {
dataService = input<any>()
tableHeaders = input<TableHeader[]>()
}
