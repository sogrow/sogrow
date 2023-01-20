import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import serverlessExpress from '@vendia/serverless-express'
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda'

import { AppModule } from './app/app.module'
import { Logger } from 'nestjs-pino'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'

let server: Handler

async function bootstrap(): Promise<Handler> {
  const nestApp = await NestFactory.create(AppModule)
  nestApp.useGlobalPipes(new ValidationPipe())
  await nestApp.init()
  const prismaService: PrismaService = nestApp.get(PrismaService)
  await prismaService.enableShutdownHooks(nestApp)
  nestApp.useLogger(nestApp.get(Logger))
  const app = nestApp.getHttpAdapter().getInstance()
  return serverlessExpress({ app })
}

export const handler: Handler = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
  if (!server) {
    server = await bootstrap()
  }
  return server(event, context, callback)
}
