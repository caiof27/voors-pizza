import { Inject, Injectable } from '@nestjs/common'
import { FindPizzaFlavorsRepository } from 'src/data/protocols';
import { PizzaFlavor } from 'src/infra/orm/entities';
import { PIZZA_FLAVOR_REPOSITORY } from 'src/infra/orm/sequelize.repositories';


@Injectable()
export class PizzaFlavorRepository implements FindPizzaFlavorsRepository {
  constructor(
    @Inject(PIZZA_FLAVOR_REPOSITORY) private readonly repository: typeof PizzaFlavor,
  ) {}
  
  async findAll(): Promise<FindPizzaFlavorsRepository.Result>{
    return await this.repository.findAll()
  }
}
