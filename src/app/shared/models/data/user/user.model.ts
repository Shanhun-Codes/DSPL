import { Rank } from "../shared/rank.model";
import { Activity } from "./activity.model";
import { Gender } from "./gender.model";

// models.ts
export type EventStatus = "scheduled" | "completed" | "settled" | "cancelled";
export type WinnerPlace = 1 | 2 | 3;


export interface UserApiModel {
  id: string;
  username: string; // UNIQUE
  publicCode: string; // UNIQUE (used to store in phone for checker)
  email?: string;
  gender?: Gender;
  createdAt: string; // ISO
  lastActiveAt?: string; // ISO
  lifetimePoints: number;
  seasonPoints: number;
  lifetimeWinnings?: number;
  icon?: string;
  activity: Activity;
  role?: "player" | "host" | "admin";
  rank: Rank
  isBanned?: boolean;
  marketingOptIn?: boolean;
}











