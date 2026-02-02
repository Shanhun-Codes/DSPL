export interface Activity {
  totalEventsAttended: number;
  totalWins: number;
  lastCheckInAt?: string; // ISO
  currentStreakWeeks: number;
  favoriteVenueId?: string;

  // recommended
  lastEventId?: string;
  top3Finishes?: number;
}