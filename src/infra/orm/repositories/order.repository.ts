import { Inject, Injectable } from '@nestjs/common'
import { col, fn, literal } from 'sequelize';
import { FindOrderRepository, CreateOrderRepository } from 'src/data/protocols';
import { Order, OrderPizza, OrderPizzaPersonalization, PizzaFlavor, PizzaPersonalization, PizzaSize } from 'src/infra/orm/entities';
import { ORDER_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { sumTotalPrize, sumTotalTime } from 'src/infra/orm/helpers';
import { sumPrizeFinal } from '../helpers/sum-prize-final';


@Injectable()
export class OrderRepository implements FindOrderRepository, CreateOrderRepository {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly repository: typeof Order,
  ) {}
  
  async findOne(params: FindOrderRepository.Params): Promise<FindOrderRepository.Result>{
    const order = await this.repository.findOne({
      where: params,
      attributes: [
        sumPrizeFinal('"tb_order".id','finalPrize')
      ],
      include: [
        {
          model: OrderPizza,
          required: true,
          attributes: [
            sumTotalPrize('"pizzas".id','totalPrize'),
            sumTotalTime('"pizzas".id','totalTime'),
            [literal('"pizzas->pizzaFlavor".flavor'),'flavorName'],
            [literal('"pizzas->pizzaSize".size'),'sizeName'],
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
                [literal('"pizzas->personalization->pizzaPersonalization".personalization'),'personalizationName'],
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
    })
    return order
  }

  async create(): Promise<CreateOrderRepository.Result>{
    const order = await this.repository.create()
    return order
  }
}
