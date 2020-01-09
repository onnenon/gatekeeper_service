import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity('team')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: number;

  @Column()
  location: string;

  @Column()
  building: string;

  @Column()
  channel: string;

  @Column()
  board_position: number;

  @ManyToMany(type => User)
  @JoinTable()
  users: User[];
}
