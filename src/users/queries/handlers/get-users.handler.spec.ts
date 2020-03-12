import { mock, instance, when } from 'ts-mockito';
import { Redisk } from 'redisk';
import { GetUserByIdQuery, GetUsersQuery } from '../impl';
import { User } from 'src/users/entities/user.entity';
import { GetUsersHandler } from './get-users.handler';

describe('GetUsersHandler', () => {
    it('should query redis', async () => {
        const redisk = mock(Redisk);

        const users = [new User('::id::', '::name::', '::email::', new Date())];
        when(redisk.list(User)).thenResolve(users);

        const response = await new GetUsersHandler(instance(redisk)).execute(new GetUsersQuery());

        expect(response).toEqual(users);
    });
});
