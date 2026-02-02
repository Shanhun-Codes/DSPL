import { User } from '../../models/data/user/user.model';
import { UserDto } from '../../shared/DTOs/user.model';

export function mapUserDtoToUser(dto: UserDto): User {
  return {
    id: dto.id,
    username: dto.username,
    lifetimePoints: dto.points,
    rank: dto.rank,
    publicCode: dto.publicCode,
    createdAt: dto.createdAt,
    seasonPoints: dto.seasonPoints,
    activity: dto.activity
  };
}

export function mapUsersDtoToUsers(dtos: UserDto[]): User[] {
  return dtos.map(mapUserDtoToUser);
}
