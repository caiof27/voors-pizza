import { config } from 'dotenv';

config();

export const ENV = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_DIALECT: process.env.DB_DIALECT,
    APP_PORT: process.env.APP_PORT
};