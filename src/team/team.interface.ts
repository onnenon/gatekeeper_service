import { UserDto } from 'src/user/user.interface';

export class TeamDto {
  name: string;
  status: number;
  building: string;
  channel: string;
  boardPosition: number;
  users: UserDto[];
}
