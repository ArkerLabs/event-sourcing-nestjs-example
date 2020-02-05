import { mock, instance, when, verify, deepEqual } from 'ts-mockito';
import { CreateUserHandler } from './create-user.handler';
import { StoreEventBus } from 'event-sourcing-nestjs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserCreatedEvent } from 'src/users/events/impl/user-created.event';
import { DateFactory } from 'src/common/date.factory';
import { UidGenerator } from 'src/common/uid-generator';

describe('CreateUserHandler', () => {
    it('should emit UserCreatedEvent', async () => {
        const uidGenerator = mock(UidGenerator);
        const eventBus = mock(StoreEventBus);
        const dateFactory = mock(DateFactory);

        const name = 'Foo';
        const email = 'foo@bar.com';
        const uid = '043B5FAC980F';
        const date = new Date();

        when(uidGenerator.generate()).thenReturn(uid);
        when(dateFactory.now()).thenReturn(date);

        const createUserHandler = new CreateUserHandler(
            instance(eventBus),
            instance(uidGenerator),
            instance(dateFactory),
        );

        const response = await createUserHandler.execute(new CreateUserCommand(name, email));

        expect(response).toEqual(uid);
        verify(eventBus.publish(deepEqual(new UserCreatedEvent(uid, name, email, date)))).once();
    });
});
