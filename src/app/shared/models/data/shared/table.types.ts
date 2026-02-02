export type Cell = string | number | boolean | null | undefined;

export type ColumnDef<T extends Record<string, any>> = Readonly<{
  key: keyof T;
  header: string; 
  format?: (value: T[keyof T], row: T) => Cell;
  align?: 'left' | 'right';
  className?: string;
}>;
