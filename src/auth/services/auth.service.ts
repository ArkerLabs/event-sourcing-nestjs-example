import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { AuthPayload } from './auth.payload';
import { config } from 'src/config';

@Injectable()
export class AuthService {
    expiresIn = 365 * 24 * 60 * 60; // 1 year

    createToken(payload: AuthPayload): {expires_in: number, access_token: string} {
        const token = jwt.sign(payload.getPlainObject(), config.JWT_SECRET, {expiresIn: this.expiresIn});

        return {
            expires_in: this.expiresIn,
            access_token: token,
        };
    }

    getLoggedUser(req): AuthPayload {
        return AuthPayload.fromPlainObject(req.jwt);
    }

    async validateToken(signedUser): Promise<boolean> {
        const currentTimestamp = new Date().getTime() / 1000;
        return currentTimestamp <= signedUser.exp;
    }

}
