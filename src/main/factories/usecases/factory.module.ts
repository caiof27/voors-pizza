import { Module } from '@nestjs/common';
import { 
  orderPizzaPersonalizationProvider,
  orderPizzaProvider,
  orderProvider,
  pizzaFlavorProvider, 
  pizzaPersonalizationProvider, 
  pizzaSizeProvider 
} from 'src/infra/orm/providers';
import { 
  OrderPizzaPersonalizationRepository,
  OrderPizzaRepository,
  OrderRepository,
  PizzaFlavorRepository, 
  PizzaPersonalizationRepository, 
  PizzaSizeRepository 
} from 'src/infra/orm/repositories';
import { 
  createOrderFactory,
  findOrderFactory,
  findPizzaFlavorsFactory, 
  findPizzaPersonalizationsFactory, 
  findPizzaSizesFactory 
} from 'src/main/factories/usecases';


@Module({
  providers: [
    // Repositories

    PizzaSizeRepository,
    PizzaFlavorRepository,
    PizzaPersonalizationRepository,
    OrderRepository,
    OrderPizzaRepository,
    OrderPizzaPersonalizationRepository,

    // Providers

    pizzaSizeProvider,
    pizzaFlavorProvider,
    pizzaPersonalizationProvider,
    orderProvider,
    orderPizzaProvider,
    orderPizzaPersonalizationProvider,

    // Factories

    findPizzaSizesFactory,
    findPizzaFlavorsFactory,
    findPizzaPersonalizationsFactory,
    createOrderFactory,
    findOrderFactory,
  ],
  exports: [
    findPizzaSizesFactory,
    findPizzaFlavorsFactory,
    findPizzaPersonalizationsFactory,
    createOrderFactory,
    findOrderFactory,
  ],
})
export class FactoryModule {}