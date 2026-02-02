import { TournamentApiModel } from '../../../shared/models/data/tournament/tournament.model';
import { TableHeader } from '../../shared/models/table-header.model';

export const TOURNAMENT_HEADER_CONFIG: readonly TableHeader<TournamentApiModel>[] = [
  { label: 'Date', key: 'startAt' },
  { label: 'Start', key: 'startAt' },
  { label: 'Venue', key: 'location' },
  { label: 'Turnout', key: 'playerCount' },
] as const;
