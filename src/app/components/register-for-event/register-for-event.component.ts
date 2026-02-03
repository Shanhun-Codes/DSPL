import { Component, input } from '@angular/core';
import { DsplCardTemplateComponent } from '../shared/templates/dspl-card-template/dspl-card-template.component';
import { DynamicFormComponent } from '../shared/templates/components/dynamic-form/dynamic-form.component';
import { REGISTER_FOR_EVENT_FORM_CONFIG } from './config/form.config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dspl-register-for-event',
  standalone: true,
  imports: [DsplCardTemplateComponent, DynamicFormComponent],
  templateUrl: './register-for-event.component.html',
  styleUrl: './register-for-event.component.scss',
})
export class RegisterForEventComponent {
  readonly title = input.required<string>();
  readonly formConfig = REGISTER_FOR_EVENT_FORM_CONFIG;
}

export function onRegistrationHandler(rawFormGroup: FormGroup): void {
  if (rawFormGroup.invalid) {
    rawFormGroup.markAllAsTouched();
    return;
  }
  const data = rawFormGroup.controls;
  const actualData = rawFormGroup.getRawValue();
  console.log('INITIAL DATA:', data);
  console.log('ACTUAL DATA:', actualData);
}
