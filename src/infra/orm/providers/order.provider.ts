import { ORDER_REPOSITORY } from 'src/infra/orm/sequelize.repositories';
import { Order } from 'src/infra/orm/entities';

export const orderProvider = {
  provide: ORDER_REPOSITORY,
  useValue: Order
}