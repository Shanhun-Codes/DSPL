
export interface Season {
  id: string;
  name: string; // e.g. "Winter 2026"
  startDate: string; // ISO
  endDate: string; // ISO
  isActive: boolean;
}