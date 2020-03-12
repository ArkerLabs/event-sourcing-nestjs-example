import { mock, instance, verify, deepEqual } from 'ts-mockito';
import { Redisk } from 'redisk';
import { UserCreatedUpdater } from './user-created.updater';
import { UserCreatedEvent } from '../impl/user-created.event';
import { User } from 'src/users/entities/user.entity';

describe('UserCreatedUpdater', () => {
    it('should update redis', async () => {
        const redisk = mock(Redisk);

        const id = '59E9C6528026';
        const name = 'Foo';
        const email = 'foo@bar.com';
        const date = new Date();

        await new UserCreatedUpdater(instance(redisk)).handle(
            new UserCreatedEvent(id, name, email, date),
        );

        verify(redisk.save(deepEqual(new User(id, name, email, date)))).once();
    });
});
