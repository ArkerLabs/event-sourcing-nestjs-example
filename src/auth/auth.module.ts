import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventSourcingModule } from 'event-sourcing-nestjs';
import { CommonModule } from 'src/common/common.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        CqrsModule,
        CommonModule,
        EventSourcingModule.forFeature(),
    ],
    controllers: [AuthController],
    providers: [
        ...CommandHandlers,
        AuthService,
    ],
})
export class AuthModule {}
