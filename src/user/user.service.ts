import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, DeleteResult } from 'typeorm';
import { UserDto, CreateUserDto } from './user.interface';
import { TeamService } from 'src/team/team.service';

@Injectable()
export class UserService {
  public static mapDomainToDto = (user: User): UserDto => {
    const teams = user.teams ? user.teams.map(TeamService.mapDomainToDto) : [];
    return { ...user, teams };
  };

  public static mapDtoToDomain = (createDto: CreateUserDto): User => {
    const user = new User();
    user.username = createDto.username;
    return user;
  };

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({ id });
  }

  public async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ username });
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete({ id });
  }

  public async create(createDto: CreateUserDto): Promise<UserDto> {
    const user = this.findByUsername(createDto.username);
    if (user) {
      throw new Error(
        `User with username: ${createDto.username} already exists`,
      );
    }
    const savedUser = await this.userRepository.save(
      UserService.mapDtoToDomain(createDto),
    );
    return UserService.mapDomainToDto(savedUser);
  }
}
