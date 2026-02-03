import { EventStatus } from "./event-api.model";

export interface EventRowVm {
  id: string;

  // line 1
  title: string;

  // line 2 (small text)
  subtitle: string;        // "Mon Feb 2 · 6:30 PM • venue_job"

  // compact chips / right aligned info
  status: EventStatus;
  buyInLabel: string;      // "$30" or "Free"
  playersLabel: string;    // "18/30"
  isFull: boolean;
}
