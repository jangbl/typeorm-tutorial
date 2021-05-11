import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne, OneToMany, JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Video } from './Video';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => User, user => user.channel)
  @JoinColumn()
  user: User;

  @OneToMany(() => Video, (video) => video.channel)
  videos: Video[];
}
