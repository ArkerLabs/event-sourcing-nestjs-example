import { Resolver, Args, Query, Mutation, Context } from '@nestjs/graphql';
import { CommandBus } from '@nestjs/cqrs';
import { LoginCommand } from '../commands/impl/login.command';
import { AuthService } from 'src/graphql/services/auth.service';
import { GqlAuthGuard } from 'src/graphql/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('Auth')
export class AuthResolver {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly authService: AuthService,
    ) {
    }

    @Query()
    @UseGuards(GqlAuthGuard)
    async me(@Context('req') req) {
        return this.authService.getLoggedUser(req).userId;
    }

    @Mutation()
    async login(
        @Args('email') email: string,
    ) {
        return await this.commandBus.execute(new LoginCommand(
            email,
        ));
    }
}
