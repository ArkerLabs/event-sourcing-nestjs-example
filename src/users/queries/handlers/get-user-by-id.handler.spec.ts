import { mock, instance, when } from 'ts-mockito';
import { Redisk } from 'redisk';
import { GetUserByIdQuery } from '../impl';
import { User } from 'src/users/entities/user.entity';
import { GetUserByIdHandler } from './get-user-by-id.handler';

describe('GetUserByIdHandler', () => {
    it('should query redis', async () => {
        const redisk = mock(Redisk);

        const id = '::id::';

        const user = new User(id, '::name::', '::email::', new Date());
        when(redisk.getOne(User, id)).thenResolve(user);

        const response = await new GetUserByIdHandler(instance(redisk)).execute(new GetUserByIdQuery(id));

        expect(response).toEqual(user);
    });
});
