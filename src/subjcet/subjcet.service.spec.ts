import { Test, TestingModule } from '@nestjs/testing';
import { SubjcetService } from './subjcet.service';

describe('SubjcetService', () => {
  let service: SubjcetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjcetService],
    }).compile();

    service = module.get<SubjcetService>(SubjcetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
