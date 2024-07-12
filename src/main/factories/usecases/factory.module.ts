import { Module } from '@nestjs/common';
import { 
  pizzaFlavorProvider, 
  pizzaSizeProvider 
} from 'src/infra/orm/providers';
import { 
  PizzaFlavorRepository, 
  PizzaSizeRepository 
} from 'src/infra/orm/repositories';
import { 
  findPizzaFlavorsFactory, 
  findPizzaSizesFactory 
} from 'src/main/factories/usecases';


@Module({
  providers: [
    // Repositories

    PizzaSizeRepository,
    PizzaFlavorRepository,

    // Providers

    pizzaSizeProvider,
    pizzaFlavorProvider,

    // Factories

    findPizzaSizesFactory,
    findPizzaFlavorsFactory
  ],
  exports: [
    findPizzaSizesFactory,
    findPizzaFlavorsFactory
  ],
})
export class FactoryModule {}