import { Component, input } from '@angular/core';
import { DsplCardTemplateComponent } from '../shared/templates/dspl-card-template/dspl-card-template.component';


@Component({
  selector: 'dspl-events',
  standalone: true,
  imports: [DsplCardTemplateComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  title = input<string>();
}
