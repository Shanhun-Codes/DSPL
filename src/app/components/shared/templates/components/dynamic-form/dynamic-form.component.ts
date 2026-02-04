import { Component, input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldConfig } from './models/dynamin-form.mode';

@Component({
  selector: 'dspl-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  readonly config = input<FormFieldConfig[]>();

  // Create empty group first
  formGroup = new FormGroup({});

  ngOnInit(): void {
    this.buildForm();
    console.log(this.formGroup.controls);
  }

  private buildForm() {
    const cfg = this.config() ?? [];

    cfg.forEach((fItem) => {
      if (!fItem.formGroup) return;

      const validators = fItem.required ? [Validators.required] : [];

      const initialValue = fItem.type === 'select' ? null : '';

      this.formGroup.addControl(
        fItem.id,
        new FormControl(initialValue, validators),
      );
      console.log(this.formGroup);
      
    });
  }
}
