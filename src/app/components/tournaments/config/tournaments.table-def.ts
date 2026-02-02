import { TournamentApiModel } from "../../../shared/models/data/tournament/tournament.model";
import { DsplCellDef } from "../../shared/templates/components/tables/dspl-table.types";

export const TOURNAMENT_CELL_DEFS: readonly DsplCellDef<TournamentApiModel>[] = [
  // Date column (from startAt)
  {
    key: 'startAt',
    format: (v) =>
      new Date(String(v)).toLocaleDateString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
  },

  // Start column (also from startAt)
  {
    key: 'startAt',
    format: (v) =>
      new Date(String(v)).toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
      }),
  },

  // Venue column
  {
    key: 'location',
    format: (_v, row) => row.location?.name ?? '—',
  },

  // Turnout column
  {
    key: 'playerCount',
    format: (_v, row) => {
      const max = row.maxPlayers;
      return typeof max === 'number' && max > 0
        ? `${row.playerCount}/${max}`
        : `${row.playerCount}`;
    },
  },
] as const;
