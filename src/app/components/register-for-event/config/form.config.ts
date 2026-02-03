import { FormConfig } from '../../shared/templates/components/dynamic-form/models/dynamin-form.mode';
import { onRegistrationHandler } from '../register-for-event.component';

export const REGISTER_FOR_EVENT_FORM_CONFIG: FormConfig[] = [
  {
    id: 'selectedEvent',
    order: 1,
    label:
      'Click the event you would like to register for or select an event from the dropdown',
    type: 'select',
    placeholder: 'Select an Event',
    required: true,
    formGroup: true,
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
      id: 'text',
      order: 4,
      label: 'Create Username',
      type: 'anchor',
      link: 'https://downtownspringfieldpoker.netlify.app/',
      formGroup: false,
    },
];

export const EVENT_SELECTOR_OPTIONS_CONFIG = [];
