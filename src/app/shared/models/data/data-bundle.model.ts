import { EventParticipant } from "./user/event-participant.model";
import { Milestone } from "./shared/milestone.model";
import { Rank } from "./shared/rank.model";
import { Season } from "./shared/season.model";
import { User } from "./user/user.model";
import { Venue } from "./venue/venue.model";

export interface MockDataBundle {
  meta: {
    generatedAt: string; // ISO
    today: string; // ISO date only
    timezone: string;
  };
  seasons: Season[];
  venues: Venue[];
  ranks: Rank[];
  users: User[];
  events: Event[];
  eventParticipants: EventParticipant[];
  milestones: Milestone[];
}