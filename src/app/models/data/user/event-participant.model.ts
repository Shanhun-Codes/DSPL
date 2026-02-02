import { WinnerPlace } from "./user.model";

export interface EventParticipant {
  id: string;
  eventId: string;
  userId: string;
  checkedInAt?: string; // ISO
  isWinner: boolean;
  winnerPlace?: WinnerPlace;
  pointsAwarded?: number;
  winningsAmount?: number;
  notes?: string;

  // recommended
  checkedOutAt?: string; // ISO
  paymentStatus?: "paid" | "comp" | "unpaid";
}