/* eslint-disable prettier/prettier */
import knex from 'knex';
import { config } from 'dotenv';
config();

const Connect = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_CONNECTION,
    user: process.env.DATABASE_USER,
    port: Number(process.env.DATABASE_PORT),
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    timezone: '+00:00',
  },
});

export { Connect };
