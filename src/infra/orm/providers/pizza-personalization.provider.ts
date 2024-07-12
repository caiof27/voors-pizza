import { PIZZA_PERSONALIZATION_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { PizzaPersonalization } from 'src/infra/orm/entities';

export const pizzaPersonalizationProvider = {
  provide: PIZZA_PERSONALIZATION_REPOSITORY,
  useValue: PizzaPersonalization
}