import { Test, TestingModule } from '@nestjs/testing';
import { TTest1Controller } from './t-test1.controller';

describe('TTest1Controller', () => {
  let controller: TTest1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TTest1Controller],
    }).compile();

    controller = module.get<TTest1Controller>(TTest1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
