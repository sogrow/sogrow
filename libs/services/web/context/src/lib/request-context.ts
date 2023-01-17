import * as cls from 'cls-hooked'
import { Request, Response } from 'express'
import * as url from 'url'
import { UserPlan, UserRole } from '@sogrow/services/domain/bom'
import { UserContext } from './user-context'

export class RequestContext {
  public static nsid = 'sogrow.api'
  public readonly id: number
  public readonly request: Request
  public readonly response: Response

  private userId: string
  private email: string
  private userRole: UserRole
  private userPlan: UserPlan
  private locale: string
  private country: string
  private timeZone: string

  private path: string
  private method: string
  constructor(request: Request, response: Response) {
    this.id = Math.random()
    this.request = request
    this.response = response
  }

  public static setupRequestContext() {
    this.assignPathAndMethod()
  }

  public static setupUserContext(userContext: UserContext) {
    const requestContext = RequestContext.currentRequestContext()
    requestContext.userId = userContext.userId
    requestContext.email = userContext.email
    requestContext.userRole = userContext.userRole
    requestContext.userPlan = userContext.userPlan
    requestContext.locale = userContext.locale
    requestContext.country = userContext.country
    requestContext.timeZone = userContext.timeZone
  }

  public static getPath(): string {
    return RequestContext.currentRequestContext()?.path
  }

  public static getMethod(): string {
    return RequestContext.currentRequestContext()?.method
  }

  public static getUserId(): string {
    return RequestContext.currentRequestContext()?.userId
  }

  public static getEmail(): string {
    return RequestContext.currentRequestContext()?.email
  }

  public static getUserRole(): UserRole {
    return RequestContext.currentRequestContext()?.userRole
  }

  public static getUserPlan(): UserPlan {
    return RequestContext.currentRequestContext()?.userPlan
  }

  public static getLocale(): string {
    return RequestContext.currentRequestContext()?.locale
  }

  public static getCountry(): string {
    return RequestContext.currentRequestContext()?.country
  }

  public static getTimeZone(): string {
    return RequestContext.currentRequestContext()?.timeZone
  }

  public static currentRequestContext(): RequestContext {
    const session = cls?.getNamespace(RequestContext.nsid)
    if (session?.active) {
      return session.get(RequestContext.name)
    }
    return null
  }

  private static assignPathAndMethod() {
    const requestContext = RequestContext.currentRequestContext()
    const requestUrl = url.parse(requestContext.request.originalUrl, true)
    requestContext.path = requestUrl.pathname
    requestContext.method = requestContext.request.method
  }
}
