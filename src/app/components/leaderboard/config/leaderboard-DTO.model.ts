import { Rank } from "../../../shared/models/data/shared/rank.model"

export interface LeaderboardRowDto {
    username: string
    createdAt: string
    lifetimePoints: number
    rank: Rank
}