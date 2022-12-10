import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import serverlessExpress from '@vendia/serverless-express'
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda'

import { AppModule } from './app/app.module'
import { Logger } from 'nestjs-pino'

let server: Handler

async function bootstrap(): Promise<Handler> {
  const nestApp = await NestFactory.create(AppModule)
  nestApp.useGlobalPipes(new ValidationPipe())
  await nestApp.init()
  nestApp.useLogger(nestApp.get(Logger))
  const app = nestApp.getHttpAdapter().getInstance()
  return serverlessExpress({ app })
}

bootstrap().then((handler) => (server = handler))

function waitForServer(event: APIGatewayEvent, context: Context, callback: Callback) {
  setImmediate(() => {
    if (!server) {
      waitForServer(event, context, callback)
    } else {
      server(event, context, callback)
    }
  })
}

export const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  if (server) return server(event, context, callback)
  return waitForServer(event, context, callback)
}
