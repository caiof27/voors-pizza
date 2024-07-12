import { PIZZA_SIZE_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { PizzaSize } from 'src/infra/orm/entities';

export const pizzaSizeProvider = {
  provide: PIZZA_SIZE_REPOSITORY,
  useValue: PizzaSize
}