import { Module } from '@nestjs/common'
import { FactoryModule } from 'src/main/factories/usecases/factory.module';
import { MainController } from 'src/main/controllers/main.controller';
import { 
  BuildFindPizzaFlavorsController,
  BuildFindPizzaSizesController
} from 'src/main/factories/controllers';


@Module({
  imports: [FactoryModule],
  controllers: [MainController],
  providers: [
    BuildFindPizzaSizesController,
    BuildFindPizzaFlavorsController
  ],
})
export class MainModule {}
