import { Sequelize } from 'sequelize-typescript';
import { DatabaseDialect } from '../../../config/environment/env.interface';
import { getSequelizeOptions } from './sequelize.options';

import { ClientModel } from '../../../features/business/clients/infrastructure/persistence/models/client.model';

export const ALL_MODELS = [
  ClientModel,
];

export async function createSequelizeInstance(
  dialect: DatabaseDialect,
): Promise<Sequelize> {
  if (dialect !== DatabaseDialect.MySQL) {
    throw new Error(
      `HuellaMarket actualmente solo soporta MySQL. Dialecto recibido: ${dialect}`,
    );
  }

  const options = getSequelizeOptions(DatabaseDialect.MySQL);
  const dialectModule = require('mysql2');

  const sequelize = new Sequelize({
    ...options,
    dialectModule,
    models: ALL_MODELS,
  } as any);

  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa a MYSQL');
  } catch (error: any) {
    console.error(
      '❌ Error conectando a MYSQL:',
      error.message,
    );
    throw error;
  }

  if (process.env.NODE_ENV !== 'production') {
    await sequelize.sync({ alter: false });
    console.log('✅ Tablas sincronizadas');
  }

  return sequelize;
}
