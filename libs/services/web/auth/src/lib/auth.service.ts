import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@sogrow/services/domain/bom'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService, private readonly jwtService: JwtService) {}

  createJwtToken(user: User): string {
    const payload = {
      sub: user.id,
      email: user.email,
      userRole: user.userRole,
      userPlan: user.userPlan,
      locale: user.locale,
      country: user.country,
      timeZone: user.timeZone,
      jti: this.generateJti(),
    }

    return this.jwtService.sign(payload)
  }

  private generateJti() {
    return Math.random().toString(36).substring(7)
  }
}
