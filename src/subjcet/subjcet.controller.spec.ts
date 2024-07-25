import { Test, TestingModule } from '@nestjs/testing';
import { SubjcetController } from './subjcet.controller';
import { SubjcetService } from './subjcet.service';

describe('SubjcetController', () => {
  let controller: SubjcetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjcetController],
      providers: [SubjcetService],
    }).compile();

    controller = module.get<SubjcetController>(SubjcetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
