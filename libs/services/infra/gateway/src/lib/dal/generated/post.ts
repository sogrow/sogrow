import { User } from './user'
import { SocialPost } from './social_post'
import { PostMeta } from './post_meta'
import { Schedule } from './schedule'
import { PostStatus } from '@prisma/client'

export class Post {
  id: string

  userId: string

  user: User

  body?: string

  postStatus: PostStatus = PostStatus.DRAFT

  socialPosts: SocialPost[]

  postMeta: PostMeta[]

  createdAt: Date

  updatedAt: Date

  Schedule: Schedule[]
}
