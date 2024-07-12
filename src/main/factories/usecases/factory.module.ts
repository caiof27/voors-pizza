import { Module } from '@nestjs/common';
import { pizzaSizeProvider } from 'src/infra/orm/providers';
import { PizzaSizeRepository } from 'src/infra/orm/repositories';
import { findPizzaSizesFactory } from 'src/main/factories/usecases';


@Module({
  providers: [
    // Repositories

    PizzaSizeRepository,

    // Providers

    pizzaSizeProvider,

    // Factories

    findPizzaSizesFactory
  ],
  exports: [
    findPizzaSizesFactory
  ],
})
export class FactoryModule {}