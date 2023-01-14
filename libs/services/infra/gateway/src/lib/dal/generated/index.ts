import { User as _User } from './user'
import { Account as _Account } from './account'
import { SocialAccount as _SocialAccount } from './social_account'
import { Slot as _Slot } from './slot'
import { Post as _Post } from './post'
import { PostMeta as _PostMeta } from './post_meta'
import { SocialPost as _SocialPost } from './social_post'
import { SocialPostHistory as _SocialPostHistory } from './social_post_history'
import { Schedule as _Schedule } from './schedule'
import { Feedback as _Feedback } from './feedback'
import { Session as _Session } from './session'
import { VerificationToken as _VerificationToken } from './verification_token'

export namespace PrismaModel {
  export class User extends _User {}
  export class Account extends _Account {}
  export class SocialAccount extends _SocialAccount {}
  export class Slot extends _Slot {}
  export class Post extends _Post {}
  export class PostMeta extends _PostMeta {}
  export class SocialPost extends _SocialPost {}
  export class SocialPostHistory extends _SocialPostHistory {}
  export class Schedule extends _Schedule {}
  export class Feedback extends _Feedback {}
  export class Session extends _Session {}
  export class VerificationToken extends _VerificationToken {}

  export const extraModels = [
    User,
    Account,
    SocialAccount,
    Slot,
    Post,
    PostMeta,
    SocialPost,
    SocialPostHistory,
    Schedule,
    Feedback,
    Session,
    VerificationToken,
  ]
}
