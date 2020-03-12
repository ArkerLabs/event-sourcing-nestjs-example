import { LoginHandler } from './login.handler';
import { LoginCommand } from '../impl/login.command';
import { Redisk } from 'redisk';
import { mock, instance, when, deepEqual } from 'ts-mockito';
import { AuthService } from 'src/graphql/services/auth.service';
import { User } from 'src/users/entities/user.entity';
import { AuthPayload } from 'src/graphql/services/auth.payload';
import { ForbiddenException } from '@nestjs/common';

describe('LoginHandler with valid email', () => {
    it('should return generated token', async () => {

        const redisk = mock(Redisk);
        const authService = mock(AuthService);

        const email = 'foo@bar.com';
        const id = '::id::';

        when(redisk.getOne(User, email, 'email')).thenResolve(new User(id, '::name::', email, new Date()));

        const tokenResponse = { access_token: '::token::', expires_in: 9999 };

        when(authService.createToken(deepEqual(new AuthPayload(id)))).thenReturn(tokenResponse);

        const handler = new LoginHandler(
            instance(redisk),
            instance(authService),
        );

        const response = await handler.execute(new LoginCommand(email));

        expect(response).toEqual(tokenResponse);
    });
});

describe('LoginHandler with invalid email', () => {
    it('should throw error', async () => {
        const redisk = mock(Redisk);
        const authService = mock(AuthService);

        const email = 'foo@bar.com';

        when(redisk.getOne(User, email, 'email')).thenResolve(null);

        const handler = new LoginHandler(
            instance(redisk),
            instance(authService),
        );

        await expect(handler.execute(new LoginCommand(email))).rejects.toBeInstanceOf(
            ForbiddenException,
        );
    });
});
