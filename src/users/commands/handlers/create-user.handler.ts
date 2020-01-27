import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserCreatedEvent } from 'src/users/events/impl/user-created.event';
import { StoreEventBus } from 'event-sourcing-nestjs';
import * as nanoid from 'nanoid';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

    constructor(
        private readonly eventBus: StoreEventBus,
    ) {}

    async execute(command: CreateUserCommand) {
        const { name, email } = command;
        const id = nanoid();
        this.eventBus.publish(new UserCreatedEvent(id, name, email, new Date()));
        return id;
    }

}
