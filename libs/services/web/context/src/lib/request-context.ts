import * as cls from 'cls-hooked'
import { Request, Response } from 'express'
import * as url from 'url'
import { getCurrentInvoke } from '@vendia/serverless-express'
export class RequestContext {
  public static nsid = 'sogrow.api'
  public readonly id: number
  public readonly request: Request
  public readonly response: Response
  private userId: string

  private path: string
  private method: string

  constructor(request: Request, response: Response) {
    this.id = Math.random()
    this.request = request
    this.response = response
  }

  public static setupRequestContext() {
    this.assignAuthorizerRequest()
    this.assignPathAndMethod()
  }

  public static currentRequestContext(): RequestContext {
    const session = cls?.getNamespace(RequestContext.nsid)
    if (session?.active) {
      return session.get(RequestContext.name)
    }
    return null
  }

  private static assignAuthorizerRequest() {
    const { event } = getCurrentInvoke()
    // if (!event?.requestContext?.authorizer) {
    if (!event?.requestContext) {
      return
    }
    console.log({ requestContext: event.requestContext })
  }

  private static assignPathAndMethod() {
    const requestContext = RequestContext.currentRequestContext()
    const requestUrl = url.parse(requestContext.request.originalUrl, true)
    requestContext.path = requestUrl.pathname
    requestContext.method = requestContext.request.method
  }
}
