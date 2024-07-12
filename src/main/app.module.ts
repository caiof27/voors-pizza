import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/orm/database.module';
import { MainModule } from './controllers/main.module';

@Module({
  imports: [
    DatabaseModule,
    MainModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
