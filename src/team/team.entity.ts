import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { TeamStatus } from './team.interface';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ default: TeamStatus.OUT })
  status: TeamStatus;

  @Column({ default: 'Vault' })
  building: string;

  @Column()
  location: string;

  @Column()
  channel: string;

  @Column()
  board_position: number;

  @ManyToMany(
    type => User,
    user => user.teams,
    { cascade: true },
  )
  @JoinTable()
  users: User[];
}
