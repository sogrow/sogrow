import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import { RequestContext, UserContext } from '@sogrow/services/web/context'
import { UserPlan, UserRole } from '@sogrow/services/domain/bom'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: any) {
    const userContext = this.extractUserContextFromJwtPayload(payload)
    RequestContext.setupUserContext(userContext)
    return { userId: payload.sub }
  }

  private extractUserContextFromJwtPayload(payload: any): UserContext {
    return {
      userId: payload.sub,
      email: payload.email,
      userPlan: UserPlan[payload.userPlan],
      userRole: UserRole[payload.userRole],
      locale: payload.locale,
      country: payload.country,
      timeZone: payload.timeZone,
    }
  }
}
