import { EventStatus } from "../user/user.model";

export interface Event {
  id: string;
  venueId: string;
  seasonId?: string;
  name: string;
  inviteCode: number; // 4 digits
  startTime: string; // ISO
  endTime?: string; // ISO
  status: EventStatus;
  notes?: string;
  closedAt?: string; // ISO

  // recommended (ops)
  maxPlayers?: number;
  checkInOpensAt?: string; // ISO
  checkInClosesAt?: string; // ISO
  entryFeeCents?: number;
  createdByUserId?: string;
}