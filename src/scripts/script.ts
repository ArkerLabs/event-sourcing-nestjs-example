import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

export class Script {
    static async run(script: (app: INestApplication) => void) {
        const app = await NestFactory.create(AppModule.forRoot());
        await script(app);
        process.exit();
    }
}
