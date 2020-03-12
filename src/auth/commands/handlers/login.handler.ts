import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../impl/login.command';
import { AuthService } from 'src/graphql/services/auth.service';
import { Redisk } from 'redisk';
import { User } from 'src/users/entities/user.entity';
import { AuthPayload } from 'src/graphql/services/auth.payload';
import { ForbiddenException } from '@nestjs/common';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {

    constructor(
        private readonly redisk: Redisk,
        private readonly authService: AuthService,
    ) {}

    async execute(command: LoginCommand) {
        const user = await this.redisk.getOne(User, command.email, 'email');
        if (user === null) {
            throw new ForbiddenException('Invalid email');
        }

        return this.authService.createToken(new AuthPayload(user.id));
    }

}
