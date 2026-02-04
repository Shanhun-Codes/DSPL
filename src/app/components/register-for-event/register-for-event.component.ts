import { Component, computed, inject, input, OnInit } from '@angular/core';
import { REGISTER_FOR_EVENT_FORM_CONFIG } from './config/form.config';
import { EventsService } from '../events/events.service';
import { DsplCardTemplateComponent } from '../shared/templates/dspl-card-template/dspl-card-template.component';
import { DynamicFormComponent } from '../shared/templates/components/dynamic-form/dynamic-form.component';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../shared/templates/components/dynamic-form/models/dynamin-form.model';
import { RegisterForEventService } from './register-for-event.service';

@Component({
  selector: 'dspl-register-for-event',
  standalone: true,
  templateUrl: './register-for-event.component.html',
  styleUrls: ['./register-for-event.component.scss'],
  imports: [DsplCardTemplateComponent, DynamicFormComponent],
})
export class RegisterForEventComponent implements OnInit {
  readonly title = input.required<string>();
  readonly eventService = inject(EventsService);
  readonly rfeService = inject(RegisterForEventService);

readonly selectOptions = computed(() => {
  const now = new Date();

  const future = this.eventService.events()
    .filter(e => new Date(e.startAt ?? e.date ?? e.startsAt) > now)
    .map(e => ({ label: e.name, value: e.id }));

  const selected = this.rfeService.showSelectedEventInOptionOnTableRowClick(); // ✅ read signal value

  // ✅ if no selected event, just show future events
  if (!selected) return future;

  const selectedOpt = { label: selected.name, value: selected.id };

  // ✅ always return an array; include selected first (and avoid duplicates)
  return [
    selectedOpt,
    ...future.filter(o => o.value !== selectedOpt.value),
  ];
});

readonly formConfig = computed(() =>
  REGISTER_FOR_EVENT_FORM_CONFIG.map(field =>
    field.id === 'selectedEvent'
      ? { ...field, options: this.selectOptions() }
      : field
  )
);


  ngOnInit(): void {
    this.eventService.load();
  }
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
