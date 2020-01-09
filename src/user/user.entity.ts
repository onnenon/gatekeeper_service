import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Team } from 'src/team/team.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @ManyToMany(
    type => Team,
    team => team.users,
    { cascade: true },
  )
  teams: Team[];
}
