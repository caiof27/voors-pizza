import { Test, TestingModule } from '@nestjs/testing';
import { ORDER_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { Order, OrderPizza, OrderPizzaPersonalization, PizzaFlavor, PizzaPersonalization, PizzaSize } from 'src/infra/orm/entities';
import { FindOrderRepository, CreateOrderRepository } from 'src/data/protocols';
import { sumTotalPrize, sumTotalTime } from 'src/infra/orm/helpers';
import { sumPrizeFinal } from 'src/infra/orm/helpers/sum-prize-final';
import { OrderRepository } from 'src/infra/orm/repositories';
import { literal } from 'sequelize';

jest.mock('src/infra/orm/helpers/sum-prize-final');
jest.mock('src/infra/orm/helpers');

describe('OrderRepository', () => {
  let repository: OrderRepository;
  let mockOrderModel: typeof Order;

  beforeEach(async () => {
    mockOrderModel = {
      findOne: jest.fn(),
      create: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderRepository,
        {
          provide: ORDER_REPOSITORY,
          useValue: mockOrderModel,
        },
      ],
    }).compile();

    repository = module.get<OrderRepository>(OrderRepository);
  });


  describe('findOne', () => {
    it('should return an order with the correct attributes and includes', async () => {
      const mockParams: FindOrderRepository.Params = { id: 1 };
      const mockOrder = {
        id: 1,
        finalPrize: 100,
        pizzas: [
          {
            totalPrize: 50,
            totalTime: 30,
            flavorName: 'Portuguesa',
            sizeName: 'Grande',
            personalizationName: 'Borda Recheada'
          }
        ]
      };
      (mockOrderModel.findOne as jest.Mock).mockResolvedValue(mockOrder);

      const result = await repository.findOne(mockParams);

      expect(result).toEqual(mockOrder);
      expect(mockOrderModel.findOne).toHaveBeenCalledWith({
        where: mockParams,
        attributes: [sumPrizeFinal('"tb_order".id', 'finalPrize')],
        include: [
          {
            model: OrderPizza,
            required: true,
            attributes: [
              sumTotalPrize('"pizzas".id', 'totalPrize'),
              sumTotalTime('"pizzas".id', 'totalTime'),
              [literal('"pizzas->pizzaFlavor".flavor'), 'flavorName'],
              [literal('"pizzas->pizzaSize".size'), 'sizeName'],
            ],
            include: [
              {
                model: PizzaFlavor,
                required: true,
                attributes: [],
              },
              {
                model: PizzaSize,
                required: true,
                attributes: [],
              },
              {
                model: OrderPizzaPersonalization,
                required: false,
                attributes: [
                  [literal('"pizzas->personalization->pizzaPersonalization".personalization'), 'personalizationName'],
                ],
                include: [
                  {
                    model: PizzaPersonalization,
                    required: true,
                    attributes: [],
                  }
                ]
              }
            ]
          }
        ]
      });
    });

    it('should throw an error if findOne fails', async () => {
      const mockParams: FindOrderRepository.Params = { id: 1 };
      (mockOrderModel.findOne as jest.Mock).mockRejectedValue(new Error('Test error'));

      await expect(repository.findOne(mockParams)).rejects.toThrow('Test error');
    });
  });

  describe('create', () => {
    it('should create and return an order', async () => {
      const mockOrder = { id: 1 };
      (mockOrderModel.create as jest.Mock).mockResolvedValue(mockOrder);

      const result = await repository.create();

      expect(result).toEqual(mockOrder);
      expect(mockOrderModel.create).toHaveBeenCalled();
    });

    it('should throw an error if create fails', async () => {
      (mockOrderModel.create as jest.Mock).mockRejectedValue(new Error());

      await expect(repository.create()).rejects.toThrow();
    });
  });
});
