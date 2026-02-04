import {
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { DsplCardTemplateComponent } from '../../shared/templates/dspl-card-template/dspl-card-template.component';
import { DsplTableComponent } from '../../shared/templates/components/tables/dspl-table/dspl-table.component';
import { EventsService } from '../events.service';
import { EVENT_CELL_DEFS } from '../config/events.table-def';
import { EVENT_HEADER_CONFIG } from '../config/events.config';
import { TablesService } from '../../shared/templates/tables.service';

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
  readonly tableService = inject(TablesService)
  readonly tableHeaders = EVENT_HEADER_CONFIG;
  readonly defs = EVENT_CELL_DEFS;

  readonly isClickable = this.tableService.isClickable

  // @Output() select = new EventEmitter<string>(); // change this to the new output method

  ngOnInit(): void {
    this.eventSelectorService.load();
    this.tableService.isClickable.set(true)
  }

  filter(t: string) {
    if (t === 'PAST') this.eventSelectorService.filterPastEvents();
    if (t === 'FUTURE') this.eventSelectorService.filterFutureEvents();
    if(t === 'ALL') this.eventSelectorService.resetFilteredEvents();
  }

  handleRowClick(row: any){
console.log("Row Clicked: "), row;

  }
}
