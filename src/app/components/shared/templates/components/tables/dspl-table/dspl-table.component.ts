import { Component, computed, input, OnInit } from '@angular/core';
import { DsplTableRowComponent } from '../dspl-table-row/dspl-table-row.component';
import { DsplCellDef } from '../dspl-table.types';
import { TableHeader } from '../../../../models/table-header.model';


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
  // what you already have (probably)
  readonly tableHeaders = input.required<readonly TableHeader<T>[]>();

  // your row data input
  readonly rows = input.required<readonly T[]>();

readonly cellDefs = computed<readonly DsplCellDef<T>[]>(() => {
  const provided = this.defs();
  if (provided && provided.length) return provided;

  return this.tableHeaders().map((h) => ({ key: h.key }));
});
}
