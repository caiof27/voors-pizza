import { Inject, Injectable } from '@nestjs/common'
import { CreateOrderPizzaPersonalizationRepository } from 'src/data/protocols';
import { OrderPizzaPersonalization } from 'src/infra/orm/entities';
import { ORDER_PIZZA_PERSONALIZATION_REPOSITORY } from 'src/infra/orm/sequelize.repositories';


@Injectable()
export class OrderPizzaPersonalizationRepository implements CreateOrderPizzaPersonalizationRepository {
  constructor(
    @Inject(ORDER_PIZZA_PERSONALIZATION_REPOSITORY) private readonly repository: typeof OrderPizzaPersonalization,
  ) {}

  async create(params:CreateOrderPizzaPersonalizationRepository.Params): Promise<CreateOrderPizzaPersonalizationRepository.Result>{
    const { personalization, orderPizzaId } = params
    await this.repository.bulkCreate(personalization.map((data)=>{
      return {
        pizzaPersonalizationId: data.personalizationId,
        orderPizzaId
      }
    }))
  }
}
