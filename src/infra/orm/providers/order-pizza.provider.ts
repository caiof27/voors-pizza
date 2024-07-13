import { ORDER_PIZZA_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { OrderPizza } from 'src/infra/orm/entities';

export const orderPizzaProvider = {
  provide: ORDER_PIZZA_REPOSITORY,
  useValue: OrderPizza
}