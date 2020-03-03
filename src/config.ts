import * as dotenv from 'dotenv';

const configFromProcess = {
    APP_PORT: process.env.APP_PORT,
    REDIS_URL: process.env.REDIS_URL,
    MONGO_URL: process.env.MONGO_URL,
    STRIPE_APIKEY: process.env.STRIPE_APIKEY,
    STRIPE_SECRETKEY: process.env.STRIPE_SECRETKEY,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
};
export const config = {...configFromProcess, ...dotenv.config().parsed};
