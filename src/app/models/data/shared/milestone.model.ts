export interface Milestone {
  id: string;
  userId: string;
  type: string; // MileStoneType TBD
  achievedAt: string; // ISO

  // recommended
  meta?: Record<string, unknown>;
}