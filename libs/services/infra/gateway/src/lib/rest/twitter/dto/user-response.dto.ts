import { TwitterResponseDto } from './twitter-response.dto'

export class UserResponse {
  id?: string
  name?: string
  username?: string
}

export class UserResponseDto extends TwitterResponseDto<UserResponse> {}
