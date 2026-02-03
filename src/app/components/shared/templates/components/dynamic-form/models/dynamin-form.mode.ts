export interface FormConfig {
  id: string;
  order: number;
  label: string;
  type: string;
  placeholder?: string;
  link?: string;
  click?: any;
  required?: boolean;
  formGroup: boolean;
  autocomplete?: boolean;
}
