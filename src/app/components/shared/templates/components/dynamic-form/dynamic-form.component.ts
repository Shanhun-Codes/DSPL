import { Component, effect, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldConfig } from './models/dynamin-form.model';

@Component({
  selector: 'dspl-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  readonly config = input<FormFieldConfig[]>();
  readonly prefill = input<Record<string, any> | null>(null);

  formGroup = new FormGroup({});

  constructor() {
    // ✅ injection context is valid here
    effect(() => {
      const values = this.prefill();
      if (!values) return;

      // only patch keys that actually exist as controls
      const patch: Record<string, any> = {};
      for (const [k, v] of Object.entries(values)) {
        if (this.formGroup.contains(k)) patch[k] = v;
      }
      if (Object.keys(patch).length) {
        this.formGroup.patchValue(patch, { emitEvent: true });
      }
    });
  }

  ngOnInit(): void {
    this.buildForm();
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
    });
  }
}
