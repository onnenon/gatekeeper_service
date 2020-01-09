import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { TeamDto, CreateTeamDto } from './team.interface';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/user.interface';

@Injectable()
export class TeamService {
  public static mapDomainToDto = (team: Team): TeamDto => {
    const users = team.users
      ? team.users.map(UserService.mapDomainToDto)
      : ([] as UserDto[]);
    return {
      ...team,
      boardPosition: team.board_position,
      users,
    };
  };

  public static mapDtoToDomain = (dto: CreateTeamDto): Team => {
    const team = new Team();
    team.board_position = dto.boardPosition;
    team.name = dto.name;
    team.channel = dto.channel;
    team.location = dto.location;
    team.building = dto.building;

    return team;
  };

  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  public async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  public async findOne(teamDto: TeamDto): Promise<Team> {
    return await this.teamRepository.findOne({ name: teamDto.name });
  }
}
