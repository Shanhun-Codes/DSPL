export interface FormFieldConfig {
  id: string;
  order: number;
  label: string;
  type: string;
  placeholder?: string;
  link?: string;
  click?: any; // fix typing
  required?: boolean;
  formGroup: boolean;
  autocomplete?: boolean;
  loadData?: any; // fix typing
  options?: {label: string; value:string }[]
}
