export type EventStatus = 'completed' | 'in_progress' | 'upcoming';

export interface EventDto {
  id: string;
  name: string;
  status: EventStatus;
  venueId: string;
  startAt: string;              // ISO string from JSON
  endAt?: string;               // only present sometimes
  buyIn?: number;               // sometimes missing (freeroll)
  playerCount: number;
  maxPlayers: number;
  prizeSummary: string;
  blindStructure: string;
  hostName?: string;            // sometimes missing
  prizePool?: number;           // sometimes missing
  yourResult?: {
    place: number;
    pointsEarned: number;
  };
}
