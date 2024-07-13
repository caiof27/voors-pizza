import { ORDER_PIZZA_PERSONALIZATION_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { OrderPizzaPersonalization } from 'src/infra/orm/entities';

export const orderPizzaPersonalizationProvider = {
  provide: ORDER_PIZZA_PERSONALIZATION_REPOSITORY,
  useValue: OrderPizzaPersonalization
}