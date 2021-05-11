import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Channel } from './Channel';
import { Tag } from './Tag';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Channel, (channel) => channel.videos)
  channel: Channel;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
