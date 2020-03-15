import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EventSourcingModule } from 'event-sourcing-nestjs';
import { RediskModule } from 'redisk-nestjs';
import { config } from 'src/config';

@Module({})
export class AppModule {
    static forRoot(): DynamicModule {
        return {
            module: this,
            imports: [
                UsersModule,
                AuthModule,
                RediskModule.forRoot({ url: config.REDIS_URL }),
                EventSourcingModule.forRoot({ mongoURL: config.MONGO_URL }),
            ],
            controllers: [AppController],
        };
    }
}
