import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot());
  await app.listen(config.APP_PORT || 3000);
}
bootstrap();
