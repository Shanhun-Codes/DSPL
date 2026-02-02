export type DsplCell = string | number | boolean | null | undefined;

export type DsplCellDef<T extends Record<string, any>> = Readonly<{
  key: keyof T;
  format?: (value: T[keyof T], row: T) => DsplCell;
}>;
