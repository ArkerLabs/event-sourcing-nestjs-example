import { Redisk } from 'redisk';
import { IViewUpdater, ViewUpdaterHandler } from 'event-sourcing-nestjs';
import { UserCreatedEvent } from '../impl/user-created.event';
import { User } from 'src/users/entities/user.entity';

@ViewUpdaterHandler(UserCreatedEvent)
export class UserCreatedUpdater implements IViewUpdater<UserCreatedEvent> {

    constructor(
        private readonly redisk: Redisk,
    ) {
    }

    async handle(event: UserCreatedEvent) {
        const { id, name, email, created } = event;
        await this.redisk.save<User>(new User(id, name, email, created));
    }
}
