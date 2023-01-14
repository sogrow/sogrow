import { Post } from './post'
import { SocialPostHistory } from './social_post_history'
import { Schedule } from './schedule'
import { PostStatus } from '@prisma/client'

export class SocialPost {
  id: string

  postId: string

  post: Post

  body?: string

  accountId: string

  parentSocialPostId?: string

  socialId?: string

  socialLink?: string

  postStatus: PostStatus = PostStatus.DRAFT

  publishedAt?: Date

  socialPostHistory: SocialPostHistory[]

  updatedAt?: Date

  createdAt?: Date

  Schedule: Schedule[]
}
