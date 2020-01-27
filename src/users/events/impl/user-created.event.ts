import { StorableEvent } from 'event-sourcing-nestjs';

export class UserCreatedEvent extends StorableEvent {

    eventAggregate = 'user';
    eventVersion = 1;

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly created: Date,
    ) {
        super();
    }
}
