import { PIZZA_FLAVOR_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { PizzaFlavor } from 'src/infra/orm/entities';

export const pizzaFlavorProvider = {
  provide: PIZZA_FLAVOR_REPOSITORY,
  useValue: PizzaFlavor
}