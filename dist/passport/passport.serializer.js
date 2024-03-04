"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportSerializer = void 0;
const passport = require("passport");
class PassportSerializer {
    constructor() {
        const passportInstance = this.getPassportInstance();
        passportInstance.serializeUser(async (req, user, done) => {
            try {
                done(null, await this.serializeUser(user, req));
            }
            catch (err) {
                done(err);
            }
        });
        passportInstance.deserializeUser(async (req, payload, done) => {
            try {
                done(null, await this.deserializeUser(payload, req));
            }
            catch (err) {
                done(err);
            }
        });
    }
    getPassportInstance() {
        return passport;
    }
}
exports.PassportSerializer = PassportSerializer;
