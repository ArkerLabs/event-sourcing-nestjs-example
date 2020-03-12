import { mock, instance, when } from 'ts-mockito';
import { Redisk } from 'redisk';
import { GetUserByEmailHandler } from './get-user-by-email.handler';
import { GetUserByEmailQuery } from '../impl';
import { User } from 'src/users/entities/user.entity';

describe('GetUserByEmailHandler', () => {
    it('should query redis', async () => {
        const redisk = mock(Redisk);

        const email = 'foo@bar.com';

        const user = new User('::id::', '::name::', email, new Date());
        when(redisk.getOne(User, email, 'email')).thenResolve(user);

        const response = await new GetUserByEmailHandler(instance(redisk)).execute(new GetUserByEmailQuery(email));

        expect(response).toEqual(user);
    });
});
