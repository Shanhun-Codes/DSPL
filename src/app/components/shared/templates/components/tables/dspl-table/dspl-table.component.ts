import { Component, computed, inject, input, output } from '@angular/core';
import { DsplTableRowComponent } from '../dspl-table-row/dspl-table-row.component';
import { DsplCellDef } from '../dspl-table.types';
import { TableHeader } from '../../../../models/table-header.model';
import { TablesService } from '../../../tables.service';
import { RegisterForEventService } from '../../../../../register-for-event/register-for-event.service';

@Component({
  selector: 'dspl-table',
  standalone: true,
  imports: [DsplTableRowComponent],
  templateUrl: './dspl-table.component.html',
  styleUrl: './dspl-table.component.scss',
  host: { style: 'display: contents' },
})
export class DsplTableComponent<T extends Record<string, any>> {
  readonly defs = input<readonly DsplCellDef<T>[] | null>(null);

  readonly canRowClick = input<(row: T) => boolean>(() => true);

  readonly tableService = inject(TablesService);
  readonly rfeService = inject(RegisterForEventService);

  readonly isClickable = this.tableService.isClickable;

  readonly tableHeaders = input.required<readonly TableHeader<T>[]>();
  readonly rows = input.required<readonly T[]>();

  readonly cellDefs = computed<readonly DsplCellDef<T>[]>(() => {
    const provided = this.defs();
    if (provided && provided.length) return provided;
    return this.tableHeaders().map((h) => ({ key: h.key }));
  });

  readonly rowClicked = output<string>();

  rowIsClickable(row: T): boolean {
    return this.isClickable() && this.canRowClick()(row);
  }

  onRowClick(row: T) {
    if (!this.rowIsClickable(row)) return;

    const id = (row as any)['id'] as string;
    this.rfeService.selectedRowId.set(id);

    // ✅ actually call the function (you were missing ())
    const selected = this.rfeService.showSelectedEventInOptionOnTableRowClick();
    console.log('selected event', selected);

    this.rowClicked.emit(id);
  }
}
