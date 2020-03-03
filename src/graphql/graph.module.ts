import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from 'src/config';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        AuthService,
        GraphQLModule.forRoot({
          debug: config.NODE_ENV === 'development',
          playground: config.NODE_ENV === 'development',
          typePaths: ['./**/*.graphql'],
          context: ({ req }) => ({ req }),
        }),
    ],
    exports: [
        AuthService,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        GqlAuthGuard,
     ],
})
export class GraphModule {}
