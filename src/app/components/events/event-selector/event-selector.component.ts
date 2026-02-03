import {
  Component,
  EventEmitter,
  inject,
  input,
  OnInit,
  Output,
} from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { DsplCardTemplateComponent } from '../../shared/templates/dspl-card-template/dspl-card-template.component';
import { DsplTableComponent } from '../../shared/templates/components/tables/dspl-table/dspl-table.component';
import { EventsService } from '../events.service';
import { EVENT_CELL_DEFS } from '../config/events.table-def';
import { LEADERBOARD_CELL_DEFS } from '../../leaderboard/config/leaderboard.table-defs';
import { EVENT_HEADER_CONFIG } from '../config/events.config';

@Component({
  selector: 'dspl-event-selector',
  standalone: true,
  imports: [DsplCardTemplateComponent, DsplTableComponent],
  templateUrl: './event-selector.component.html',
  styleUrl: './event-selector.component.scss',
})
export class EventSelectorComponent implements OnInit {
  readonly dataSevice = inject(DataService);
  readonly eventSelectorService = inject(EventsService);
  readonly title = input<string>('');
  readonly events = this.eventSelectorService.tableRowData;
  readonly selectedId = input<string | null>();
  readonly tableHeaders = EVENT_HEADER_CONFIG;
  readonly defs = EVENT_CELL_DEFS;
  // readonly sort = 

  @Output() select = new EventEmitter<string>(); // change this to the new output method

  ngOnInit(): void {
    this.eventSelectorService.load();
    console.log(this.events());
  }
}
