import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUserByIdQuery, GetUsersQuery } from '../queries/impl';
import { CreateUserCommand } from '../commands/impl/create-user.command';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {
    }

    @Query()
    async user(@Args('id') id: string) {
        return await this.queryBus.execute(new GetUserByIdQuery(id));
    }

    @Query()
    async users() {
        return await this.queryBus.execute(new GetUsersQuery());
    }

    @Mutation()
    async createUser(
        @Args('name') name: string,
        @Args('email') email: string,
    ) {
        return await this.commandBus.execute(new CreateUserCommand(
            name,
            email,
        ));
    }
}
