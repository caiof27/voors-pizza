import { Module } from '@nestjs/common'
import { FactoryModule } from 'src/main/factories/usecases/factory.module';
import { MainController } from 'src/main/controllers/main.controller';
import { 
  BuildCreateOrderController,
  BuildFindPizzaFlavorsController,
  BuildFindPizzaPersonalizationsController,
  BuildFindPizzaSizesController,
  BuildFindOrderController
} from 'src/main/factories/controllers';
import { DatabaseModule } from 'src/infra/orm/database.module';


@Module({
  imports: [FactoryModule, DatabaseModule],
  controllers: [MainController],
  providers: [
    BuildFindPizzaSizesController,
    BuildFindPizzaFlavorsController,
    BuildFindPizzaPersonalizationsController,
    BuildCreateOrderController,
    BuildFindOrderController
  ],
})
export class MainModule {}
