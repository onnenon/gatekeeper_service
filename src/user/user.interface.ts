import { TeamDto } from 'src/team/team.interface';

export interface UserDto {
  username: string;
  teams: TeamDto[];
}
