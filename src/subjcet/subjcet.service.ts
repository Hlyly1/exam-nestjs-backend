import { Injectable } from '@nestjs/common';
import { CreateSubjcetDto } from './dto/create-subjcet.dto';
import { UpdateSubjcetDto } from './dto/update-subjcet.dto';

@Injectable()
export class SubjcetService {
  create(createSubjcetDto: CreateSubjcetDto) {
    return 'This action adds a new subjcet';
  }

  findAll() {
    return {
      data: [
        {
          title: 'react',
          value: 'react',
          children: [
            {
              value: '21天通关react',
              title: '21天通关react',
            },
          ],
        },
        {
          title: 'vue',
          value: 'vue',
          children: [
            {
              value: '深入浅出vue',
              title: '深入浅出vue',
            },
          ],
        },
      ],
      message: '请求成功',
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} subjcet`;
  }

  update(id: number, updateSubjcetDto: UpdateSubjcetDto) {
    return `This action updates a #${id} subjcet`;
  }

  remove(id: number) {
    return `This action removes a #${id} subjcet`;
  }
}
