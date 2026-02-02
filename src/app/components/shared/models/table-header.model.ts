
export interface TableHeader<T = any> {
  label: string;
  key: keyof T;
}
