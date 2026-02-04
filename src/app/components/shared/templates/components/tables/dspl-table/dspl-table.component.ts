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
  readonly tableService = inject(TablesService)
  readonly rfeService = inject(RegisterForEventService)
  readonly isClickable = this.tableService.isClickable
  
  readonly tableHeaders = input.required<readonly TableHeader<T>[]>();
  
  readonly rows = input.required<readonly T[]>();
  
  readonly cellDefs = computed<readonly DsplCellDef<T>[]>(() => {
    const provided = this.defs();
    if (provided && provided.length) return provided;
    return this.tableHeaders().map((h) => ({ key: h.key }));
  });

  readonly rowClicked = output()

  onRowClick(id: string){
    const beforeClick = this.rfeService.selectedRowId
    console.log(beforeClick());
    
    this.rfeService.selectedRowId.set(id)

    const afterClick = this.rfeService.selectedRowId
    console.log(afterClick());
    this.rfeService.showSelectedEventInOptionOnTableRowClick()
    
  }
}
