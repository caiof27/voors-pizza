import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/orm/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
