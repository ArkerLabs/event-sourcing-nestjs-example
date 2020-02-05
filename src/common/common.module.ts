import { Module } from '@nestjs/common';
import { UidGenerator } from './uid-generator';
import { DateFactory } from './date.factory';

@Module({
    exports: [
        UidGenerator,
        DateFactory,
    ],
    providers: [
        UidGenerator,
        DateFactory,
    ],
})
export class CommonModule {
}
