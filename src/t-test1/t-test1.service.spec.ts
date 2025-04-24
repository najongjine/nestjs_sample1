import { Test, TestingModule } from '@nestjs/testing';
import { TTest1Service } from './t-test1.service';

describe('TTest1Service', () => {
  let service: TTest1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TTest1Service],
    }).compile();

    service = module.get<TTest1Service>(TTest1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
