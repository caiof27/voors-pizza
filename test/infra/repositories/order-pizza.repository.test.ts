import { Test, TestingModule } from '@nestjs/testing';
import { ORDER_PIZZA_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { OrderPizza } from 'src/infra/orm/entities';
import { CreateOrderPizzaRepository } from 'src/data/protocols';
import { OrderPizzaRepository } from 'src/infra/orm/repositories';

describe('OrderPizzaRepository', () => {
  let repository: OrderPizzaRepository;
  let mockOrderPizzaModel: typeof OrderPizza;

  beforeEach(async () => {
    mockOrderPizzaModel = {
      create: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderPizzaRepository,
        {
          provide: ORDER_PIZZA_REPOSITORY,
          useValue: mockOrderPizzaModel,
        },
      ],
    }).compile();

    repository = module.get<OrderPizzaRepository>(OrderPizzaRepository);
  });

  describe('create', () => {
    it('should create and return an order', async () => {
      const mockParams: CreateOrderPizzaRepository.Params = {
        orderId:1,
        pizzaFlavorId: 1,
        pizzaSizeId: 1
      };
      const mockOrder = { id: 1, ...mockParams };
      (mockOrderPizzaModel.create as jest.Mock).mockResolvedValue(mockOrder);

      const result = await repository.create(mockParams);

      expect(result).toEqual(mockOrder);
      expect(mockOrderPizzaModel.create).toHaveBeenCalledWith(mockParams);
    });

    it('should throw an error if create fails', async () => {
      const mockParams: CreateOrderPizzaRepository.Params = {
        orderId:1,
        pizzaFlavorId: 1,
        pizzaSizeId: 1
      };
      (mockOrderPizzaModel.create as jest.Mock).mockRejectedValue(new Error());

      await expect(repository.create(mockParams)).rejects.toThrow();
    });
  });
});
