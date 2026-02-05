import { Component, inject, OnInit } from '@angular/core';
import { DsplCardTemplateComponent } from '../../shared/templates/dspl-card-template/dspl-card-template.component';
import { EventsService } from '../events.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dspl-event-details',
  standalone: true,
  imports: [DsplCardTemplateComponent, DatePipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent {
  readonly eventService = inject(EventsService);
  readonly rowDetails = this.eventService.selectedEventFromTableRowClick;  
}
