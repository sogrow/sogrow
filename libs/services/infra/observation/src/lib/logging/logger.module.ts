import { DynamicModule, Global, Module } from '@nestjs/common'
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino'

@Global()
@Module({})
export class LoggerModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        PinoLoggerModule.forRoot({
          pinoHttp: {
            level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
            transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty', options: { singleLine: true } } : undefined,
            autoLogging: false,
            redact: {
              paths: [
                'req.headers.cookie',
                'req.headers.authorization',
                'req.headers["x-forwarded-for"]',
                'req.remoteAddress',
                'req.remotePort',
              ],
              censor: '**GDPR COMPLIANT**',
            },
          },
        }),
      ],
      module: LoggerModule,
    }
  }
}
