import { DynamicModule, Module } from '@nestjs/common'
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino'

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
              paths: ['req.headers.cookie', 'req.remoteAddress'],
            },
          },
        }),
      ],
      module: LoggerModule,
    }
  }
}
