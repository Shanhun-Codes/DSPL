import { EventApiModel } from '../../../shared/models/data/event/event-api.model';
import { TableHeader } from '../../shared/models/table-header.model';

export const EVENT_HEADER_CONFIG: readonly TableHeader<EventApiModel>[] = [
  { label: 'Date', key: 'startAt' },
  { label: 'Start', key: 'startAt' },
  { label: 'Venue', key: 'location' },
  { label: 'Turnout', key: 'playerCount' },
]

