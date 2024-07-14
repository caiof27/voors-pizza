import { Test, TestingModule } from '@nestjs/testing';
import { ORDER_PIZZA_PERSONALIZATION_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { OrderPizzaPersonalization } from 'src/infra/orm/entities';
import { CreateOrderPizzaPersonalizationRepository } from 'src/data/protocols';
import { OrderPizzaPersonalizationRepository } from 'src/infra/orm/repositories';

describe('OrderPizzaPersonalizationRepository', () => {
  let repository: OrderPizzaPersonalizationRepository;
  let mockOrderPizzaPersonalizationModel: typeof OrderPizzaPersonalization;

  beforeEach(async () => {
    mockOrderPizzaPersonalizationModel = {
      bulkCreate: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderPizzaPersonalizationRepository,
        {
          provide: ORDER_PIZZA_PERSONALIZATION_REPOSITORY,
          useValue: mockOrderPizzaPersonalizationModel,
        },
      ],
    }).compile();

    repository = module.get<OrderPizzaPersonalizationRepository>(OrderPizzaPersonalizationRepository);
  });

  describe('create', () => {
    it('should call bulkCreate with correct parameters', async () => {
      const mockParams: CreateOrderPizzaPersonalizationRepository.Params = {
        personalization: [{ personalizationId: 1 }],
        orderPizzaId: 1,
      };

      await repository.create(mockParams);

      expect(mockOrderPizzaPersonalizationModel.bulkCreate).toHaveBeenCalledWith([
        { pizzaPersonalizationId: 1, orderPizzaId: 1 },
      ]);
    });

    it('should throw an error if bulkCreate fails', async () => {
      const mockParams: CreateOrderPizzaPersonalizationRepository.Params = {
        personalization: [{ personalizationId: 1 }],
        orderPizzaId: 1,
      };

      (mockOrderPizzaPersonalizationModel.bulkCreate as jest.Mock).mockRejectedValue(new Error());

      await expect(repository.create(mockParams)).rejects.toThrow();
    });
  });
});
