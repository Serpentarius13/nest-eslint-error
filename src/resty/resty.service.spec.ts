import { Test, TestingModule } from '@nestjs/testing';
import { RestyService } from './resty.service';

describe('RestyService', () => {
  let service: RestyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestyService],
    }).compile();

    service = module.get<RestyService>(RestyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
