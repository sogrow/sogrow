import { Account as _Account } from './account'
import { Session as _Session } from './session'
import { User as _User } from './user'
import { VerificationToken as _VerificationToken } from './verification_token'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PrismaModel {
  export class Account extends _Account {}
  export class Session extends _Session {}
  export class User extends _User {}
  export class VerificationToken extends _VerificationToken {}

  export const extraModels = [Account, Session, User, VerificationToken]
}
