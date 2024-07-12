import { Inject, Injectable } from '@nestjs/common'
import { FindPizzaPersonalizationsRepository } from 'src/data/protocols';
import { PizzaPersonalization } from 'src/infra/orm/entities';
import { PIZZA_PERSONALIZATION_REPOSITORY } from 'src/infra/orm/sequelize.repositories';


@Injectable()
export class PizzaPersonalizationRepository implements FindPizzaPersonalizationsRepository {
  constructor(
    @Inject(PIZZA_PERSONALIZATION_REPOSITORY) private readonly repository: typeof PizzaPersonalization,
  ) {}
  
  async findAll(): Promise<FindPizzaPersonalizationsRepository.Result>{
    return await this.repository.findAll()
  }
}
