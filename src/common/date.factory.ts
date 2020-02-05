import { Injectable } from '@nestjs/common';

@Injectable()
export class DateFactory {
    now(): Date {
        return new Date();
    }
}
