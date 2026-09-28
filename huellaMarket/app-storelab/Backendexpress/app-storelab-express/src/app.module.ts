import { Module } from '@nestjs/common';
import { ClientController } from './features/business/client/client.controller';

@Module({
  controllers: [ClientController],
})
export class AppModule {}
