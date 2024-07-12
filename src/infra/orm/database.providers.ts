import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { ENV } from 'src/config/env';
import { 
  PizzaSize
} from './entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: ENV.DB_DIALECT as Dialect,
        host: ENV.DB_HOST,
        port: Number(ENV.DB_PORT),
        username: ENV.DB_USERNAME,
        password: ENV.DB_PASSWORD,
        database: ENV.DB_DATABASE,
        sync: {
          force: false
        },
        logging: false,
      });
      sequelize.addModels([
        PizzaSize
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];