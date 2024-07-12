import { Module } from '@nestjs/common';
import { 
  pizzaFlavorProvider, 
  pizzaPersonalizationProvider, 
  pizzaSizeProvider 
} from 'src/infra/orm/providers';
import { 
  PizzaFlavorRepository, 
  PizzaPersonalizationRepository, 
  PizzaSizeRepository 
} from 'src/infra/orm/repositories';
import { 
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

    // Providers

    pizzaSizeProvider,
    pizzaFlavorProvider,
    pizzaPersonalizationProvider,

    // Factories

    findPizzaSizesFactory,
    findPizzaFlavorsFactory,
    findPizzaPersonalizationsFactory,
  ],
  exports: [
    findPizzaSizesFactory,
    findPizzaFlavorsFactory,
    findPizzaPersonalizationsFactory,
  ],
})
export class FactoryModule {}