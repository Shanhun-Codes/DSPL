import { Component, computed, input } from '@angular/core';
import { DsplCell, DsplCellDef } from '../dspl-table.types';

@Component({
  selector: 'tr[dspl-table-row]',
  standalone: true,
  templateUrl: './dspl-table-row.component.html',
  styleUrl: './dspl-table-row.component.scss',
})
export class DsplTableRowComponent<T extends Record<string, any>> {
  // row data
  readonly row = input.required<T>();

  // how to render the cells (order matters)
  readonly defs = input.required<readonly DsplCellDef<T>[]>();

  readonly cellData = computed<readonly DsplCell[]>(() => {
    const r = this.row();
    const defs = this.defs();

    return defs.map((d) => {
      const raw = r[d.key];
      return d.format ? d.format(raw as any, r) : (raw as any);
    });
  });
}
