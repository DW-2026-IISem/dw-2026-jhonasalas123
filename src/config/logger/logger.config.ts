import { Logger } from '@nestjs/common';

export function getLoggerConfig() {
  return {
    logLevels: ['log', 'error', 'warn', 'debug', 'verbose'] as (
      | 'log'
      | 'error'
      | 'warn'
      | 'debug'
      | 'verbose'
    )[],
  };
}

export const logger = new Logger('HuellaMarket');
