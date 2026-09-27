import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function main() {
  const app = await NestFactory.create(AppModule);

  await app.listen(config.port);
}

main();
