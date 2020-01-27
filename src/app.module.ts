import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from './config';

@Module({})
export class AppModule {
    static forRoot(): DynamicModule {
        return {
            module: this,
            imports: [
                UsersModule,
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
