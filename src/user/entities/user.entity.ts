import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'name', length: 99 })
  name: string;
  phone: string;
  vChat: string;
  avatar: string;
  graduation_time: string;
  money: number;
  role: string;
  has_person_info: boolean;
  edu: string;
  techStack: string;
  @CreateDateColumn()
  createTime: Date;
  @CreateDateColumn()
  updateTime: Date;
}
