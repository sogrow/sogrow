import { SocialPost } from './social_post'

export class SocialPostHistory {
  id: string

  socialPostId: string

  socialPost: SocialPost

  linkClicks?: number

  views?: number

  likes?: number

  shares?: number

  profileViews?: number

  replies?: number

  followers?: number

  createdAt?: Date

  updatedAt?: Date
}
