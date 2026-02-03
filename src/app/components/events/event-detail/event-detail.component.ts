import { Component, signal } from '@angular/core';
import { EventDto } from '../config/event-DTO.model';

@Component({
  selector: 'dspl-event-detail-card',
  standalone: true,
  imports: [],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
})
export class EventComponent {
  readonly event = signal<EventDto | null>(null);
}
