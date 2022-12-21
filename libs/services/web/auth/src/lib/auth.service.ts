import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@sogrow/services/domain/bom'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService, private readonly jwtService: JwtService) {}

  createJwtToken(user: User): string {
    const payload = {
      name: user.name,
      email: user.email,
      picture: user.picture,
      sub: user.id,
      jti: this.generateJti(),
    }

    return this.jwtService.sign(payload)
  }

  private generateJti() {
    return Math.random().toString(36).substring(7)
  }
}
