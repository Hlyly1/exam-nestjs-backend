import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'name' })
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
  createTime: Date;
  updateTime: Date;
}
