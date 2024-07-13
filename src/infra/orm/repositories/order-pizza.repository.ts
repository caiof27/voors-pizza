import { Inject, Injectable } from '@nestjs/common'
import { CreateOrderPizzaRepository } from 'src/data/protocols';
import { OrderPizza } from 'src/infra/orm/entities';
import { ORDER_PIZZA_REPOSITORY } from 'src/infra/orm/sequelize.repositories';


@Injectable()
export class OrderPizzaRepository implements CreateOrderPizzaRepository {
  constructor(
    @Inject(ORDER_PIZZA_REPOSITORY) private readonly repository: typeof OrderPizza,
  ) {}

  async create(params:CreateOrderPizzaRepository.Params): Promise<CreateOrderPizzaRepository.Result>{
    const order = await this.repository.create(params)
    return order
  }
}
