import { DsplCellDef } from '../../shared/templates/components/tables/dspl-table.types';
import { LeaderboardRowDto } from './leaderboard-DTO.model';
import { LEADERBOARD_HEADER_CONFIG } from './leaderboard.config';

export const LEADERBOARD_CELL_DEFS: readonly DsplCellDef<LeaderboardRowDto>[] =
  LEADERBOARD_HEADER_CONFIG.map((h) => ({
    key: h.key,
    format:
      h.key === 'createdAt'
        ? (v) => new Date(String(v)).toLocaleDateString()
        : undefined,
  }));
