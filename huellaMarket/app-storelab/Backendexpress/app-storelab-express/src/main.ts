import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config, App } from './config';
import express from 'express';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json());

  const appConfig = new App(app.getHttpAdapter().getInstance());
  appConfig.routes();

  await app.listen(config.port);
}

main();
