import { UserDto } from '../../shared/DTOs/user.model';
import { UserApiModel } from '../../shared/models/data/user/user.model';
import { LeaderboardRowDto } from './config/leaderboard-DTO.model';
import {DateTime} from 'luxon'

export function mapUserDtoToUser(dto: UserDto): UserDto {
  return {
    id: dto.id,
    username: dto.username,
    lifetimePoints: dto.lifetimePoints,
    rank: dto.rank,
    publicCode: dto.publicCode,
    createdAt: dto.createdAt,
    seasonPoints: dto.seasonPoints,
    activity: dto.activity
  };
}

export function mapUsersDtoToUsers(dtos: UserDto[]): UserDto[] {
  return dtos.map(mapUserDtoToUser);
}

export function toLeaderboardRowDto(u: UserApiModel): LeaderboardRowDto {
  return {
    username: u.username,
    createdAt: playingSince(u.createdAt),
    lifetimePoints: u.lifetimePoints,
    rank: u.rank,
  };
}

export function playingSince(userCreateAt: string): string {
  return `${DateTime.fromISO(userCreateAt).toRelative()}`
}
