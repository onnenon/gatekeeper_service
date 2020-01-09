import { TeamDto } from 'src/team/team.interface';

export interface UserDto {
  id: number;
  username: string;
  teams: TeamDto[];
}

export interface CreateUserDto {
  username: string;
}
