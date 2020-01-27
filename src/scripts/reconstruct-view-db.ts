import { Script } from './script';
import { INestApplication } from '@nestjs/common';
import { ReconstructViewDb } from 'event-sourcing-nestjs';

Script.run(async (app: INestApplication) => {
    await ReconstructViewDb.run(app);
});
