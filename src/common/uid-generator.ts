import { Injectable } from '@nestjs/common';
import * as nanoid from 'nanoid';

@Injectable()
export class UidGenerator {
    generate(): string {
        return nanoid();
    }
}
