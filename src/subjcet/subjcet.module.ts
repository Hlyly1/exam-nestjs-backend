import { Module } from '@nestjs/common';
import { SubjcetService } from './subjcet.service';
import { SubjcetController } from './subjcet.controller';

@Module({
  controllers: [SubjcetController],
  providers: [SubjcetService],
})
export class SubjcetModule {}
