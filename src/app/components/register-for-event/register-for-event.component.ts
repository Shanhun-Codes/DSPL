import { Component, computed, inject, input, OnInit } from '@angular/core';
import { REGISTER_FOR_EVENT_FORM_CONFIG } from './config/form.config';
import { EventsService } from '../events/events.service';
import { DsplCardTemplateComponent } from "../shared/templates/dspl-card-template/dspl-card-template.component";
import { DynamicFormComponent } from "../shared/templates/components/dynamic-form/dynamic-form.component";
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../shared/templates/components/dynamic-form/models/dynamin-form.mode';

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

  readonly selectOptions = computed(() => {
    const now = new Date();

    return this.eventService.events()
      // adjust property name if yours is different
      .filter(e => new Date(e.startAt ?? e.date ?? e.startsAt) > now)
      .map(e => ({
        label: e.name,
        value: e.id,
      }));
      
  });

  // ✅ computed config with injected select options
  readonly formConfig = computed<FormFieldConfig[]>(() =>
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


export function onRegistrationHandler(rawFormGroup: any): void {
  console.log('HANDLER ARG:', rawFormGroup);

  if (!rawFormGroup || typeof rawFormGroup.getRawValue !== 'function') {
    console.warn('No FormGroup passed to handler');
    return;
  }

  console.log('INITIAL DATA:', rawFormGroup.controls);
  console.log('ACTUAL DATA:', rawFormGroup.getRawValue());
}

