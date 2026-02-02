export type TournamentStatus = 'upcoming' | 'in_progress' | 'completed';

export interface TournamentApiModel {
  id: string;
  name: string;
  status: TournamentStatus;
  startAt: string;   // ISO
  endAt?: string;    // ISO
  location: { id: string; name: string; city: string };
  buyIn?: number;    // undefined = free
  maxPlayers?: number;
  playerCount: number;
  prizePool?: number;
  prizeSummary: string;
  blindStructure: string;
  hostName?: string;
  yourResult?: { place: number; pointsEarned: number };
}