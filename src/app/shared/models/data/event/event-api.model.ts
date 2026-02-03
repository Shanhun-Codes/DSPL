export type EventStatus = 'upcoming' | 'in_progress' | 'completed';

export interface EventApiModel {
  id: string;
  name: string;
  status: EventStatus;
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