import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<User[]> {
    return await this.userRepository.query('select * from user');
  }
  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async validateUser(username: string): Promise<User | null> {
    console.log(username, 'usernmae');
    const user = await this.findOneByUsername(username);
    console.log(user);

    if (user) {
      // 注意：实际项目中应该使用密码哈希比较
      // && user.password === password
      return user;
    }
    return null;
  }
}
