import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from './config';
import { EventSourcingModule } from 'event-sourcing-nestjs';

@Module({})
export class AppModule {
    static forRoot(): DynamicModule {
        return {
            module: this,
            imports: [
                UsersModule,
                EventSourcingModule.forRoot({ mongoURL: config.MONGO_URL }),
                GraphQLModule.forRoot({
                    debug: config.NODE_ENV === 'development',
                    playground: config.NODE_ENV === 'development',
                    typePaths: ['./**/*.graphql'],
                }),
            ],
            controllers: [AppController],
        };
    }
}
