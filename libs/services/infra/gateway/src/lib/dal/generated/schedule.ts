import { Post } from './post'
import { SocialPost } from './social_post'

export class Schedule {
  id: string

  postId: string

  post: Post

  socialPostId: string

  socialPost: SocialPost

  scheduledDateTime: Date

  scheduledTime: Date

  createdAt: Date

  updatedAt: Date
}
