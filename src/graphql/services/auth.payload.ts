export class AuthPayload {
    constructor(
        public readonly userId: string | null,
    ) {}

    public getPlainObject(): any {
        return {
            userId: this.userId,
        };
    }

    static fromPlainObject(payload: any): AuthPayload {
        return new AuthPayload(
            payload.userId,
        );
    }
}
