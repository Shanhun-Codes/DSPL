import { FormFieldConfig } from '../../shared/templates/components/dynamic-form/models/dynamin-form.mode';
import { onAnchorClickHandler, onRegistrationHandler } from '../register-for-event.component';

export const REGISTER_FOR_EVENT_FORM_CONFIG: FormFieldConfig[] = [
  {
    id: 'selectedEvent',
    order: 1,
    label:
      'Click the event you would like to register for or select an event from the dropdown',
    type: 'select',
    placeholder: 'Select an Event',
    required: true,
    formGroup: true,
    options: []
  },
  {
    id: 'username',
    order: 2,
    label: 'Username',
    type: 'text',
    placeholder: 'Enter Username',
    required: true,
    formGroup: true,
    autocomplete: true,
  },

  {
    id: 'button',
    order: 3,
    label: 'Register',
    type: 'submit',
    click: onRegistrationHandler,
    formGroup: false,
  },
    {
      id: 'anchor',
      order: 4,
      label: 'Create Username',
      type: 'anchor',
      link: 'https://downtownspringfieldpoker.netlify.app/',
      click: onAnchorClickHandler,
      formGroup: false,
    },
];

export const EVENT_SELECTOR_OPTIONS_CONFIG = [];
