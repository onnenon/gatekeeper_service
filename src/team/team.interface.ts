import { UserDto } from 'src/user/user.interface';

export interface TeamDto {
  id: number;
  name: string;
  status: TeamStatus;
  building: string;
  location?: string;
  channel?: string;
  boardPosition?: number;
  users: UserDto[];
}

export interface CreateTeamDto {
  name: string;
  location?: string;
  building?: string;
  channel?: string;
  boardPosition?: number;
}

export enum TeamStatus {
  OUT,
  IN,
}
