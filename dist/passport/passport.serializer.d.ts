/// <reference types="node" />
import { IncomingMessage } from 'http';
import * as passport from 'passport';
export declare abstract class PassportSerializer<UserType = unknown, PayloadType = unknown, RequestType extends IncomingMessage = IncomingMessage> {
    abstract serializeUser(user: UserType, req?: RequestType): Promise<PayloadType> | PayloadType;
    abstract deserializeUser(payload: PayloadType, req?: RequestType): Promise<UserType> | UserType;
    constructor();
    getPassportInstance(): passport.PassportStatic;
}
