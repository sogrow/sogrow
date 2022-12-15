import {BadRequestException, Body, Controller, Delete, Param, Post, Query} from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'
import { VerificationToken } from 'next-auth/adapters'
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

@Controller('verification-token')
export class VerificationTokenController {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(VerificationTokenController.name)
  }

  @Post()
  createVerificationToken(@Body() data): Promise<VerificationToken> {
    this.logger.info(`Received request to create verification token.`)
    return this.prisma.verificationToken.create({ data })
  }

  @Delete(':identifier')
  async useVerificationToken(@Param() identifier: string, @Query() query: { token: string }): Promise<VerificationToken> {
    this.logger.info(`Received request to use verification token [identifier=${identifier}]`)
    try {
      return this.prisma.verificationToken.delete({
        where: { identifier_token: { identifier, token: query.token } }
      })
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if(error.code === 'P2025') return null
      }
    }
    throw new BadRequestException(`BAD_REQUEST_VERIFICATION_TOKEN`)
  }
}
