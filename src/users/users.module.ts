import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { UsersController } from './users.controller';
import { StateUpdaters } from './events/updaters';
import { EventSourcingModule } from 'event-sourcing-nestjs';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [
        CqrsModule,
        CommonModule,
        EventSourcingModule.forFeature(),
    ],
    controllers: [UsersController],
    providers: [
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
        ...StateUpdaters,
    ],
})
export class UsersModule {}
