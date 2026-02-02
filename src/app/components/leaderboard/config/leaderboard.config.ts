import { TableHeader } from '../../shared/models/table-header.model';
import { LeaderboardRowDto } from './leaderboard-DTO.model';

export const LEADERBOARD_HEADER_CONFIG: readonly TableHeader<LeaderboardRowDto>[] = [
  {
    label: 'Rank',
    key: 'rank',
  },
  {
    label: 'Username',
    key: 'username',
  },
  {
    label: 'Points',
    key: 'lifetimePoints',
  },
  {
    label: 'Playing Since',
    key: 'createdAt',
  },
] as const;
