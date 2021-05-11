import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

import { Channel } from './Channel';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @OneToOne(() => Channel, (channel) => channel.user)
  channel: Channel;
}
