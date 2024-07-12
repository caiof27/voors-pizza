import { Inject, Injectable } from '@nestjs/common'
import { PizzaSize } from 'src/infra/orm/entities';
import { PIZZA_SIZE_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { FindPizzaSizesRepository } from 'src/data/protocols';


@Injectable()
export class PizzaSizeRepository implements FindPizzaSizesRepository {
  constructor(
    @Inject(PIZZA_SIZE_REPOSITORY) private readonly repository: typeof PizzaSize,
  ) {}

  async findAll(): Promise<FindPizzaSizesRepository.Result> {
    return this.repository.findAll()
  }
}
