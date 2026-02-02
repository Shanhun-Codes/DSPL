import { Rank } from "../../models/data/shared/rank.model"
import { Activity } from "../../models/data/user/activity.model"

export interface UserDto {
    id: string
    username: string
    points: number
    rank: Rank
    publicCode: string
    createdAt: string
    seasonPoints: number
    activity: Activity
}