import axios from 'axios'
import { ConfigService } from '@nestjs/config'
import { AxiosClientFactory } from '@sogrow/services/infra/instrumentation'
import { TwitterGatewayService } from './twitter-gateway.service'
import mockAxios from 'jest-mock-axios'
import { Test, TestingModule } from '@nestjs/testing'
import { PinoLogger } from 'nestjs-pino'
import { BadGatewayException } from '@nestjs/common'

describe('TwitterGatewayService', () => {
  jest.mock('axios')

  let gateway: TwitterGatewayService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        TwitterGatewayService,
        { provide: PinoLogger, useValue: { info: jest.fn(), error: jest.fn(), setContext: jest.fn() } },
        { provide: AxiosClientFactory, useValue: { build: () => mockAxios } },
        { provide: ConfigService, useValue: { get: (v) => 'https://api.twitter.com' } },
      ],
    }).compile()

    gateway = module.get<TwitterGatewayService>(TwitterGatewayService)
  })

  afterEach(() => {
    mockAxios.reset()
  })

  it('should be defined', () => {
    expect(gateway).toBeDefined()
  })

  it('should make a GET request to the Twitter API and return a User', async () => {
    mockAxios.get.mockResolvedValue({
      status: 200,
      data: {
        id: '123456',
        name: 'John Doe',
        username: 'johndoe',
      },
    })

    const bearer = 'a-valid-bearer'
    const user = await gateway.getUserInfo(bearer)
    expect(user).toEqual({
      id: 123456,
      name: 'John Doe',
      username: 'johndoe',
    })
    expect(mockAxios.get).toHaveBeenCalledWith('/users/me', {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    })
  })

  it('should throw an exception during the fetching of the user', (done) => {
    mockAxios.get.mockRejectedValueOnce({
      response: { status: 500, data: { errors: [{ message: 'RANDOM_EXCEPTION', description: 'Any error description' }] } },
    })

    const bearer = 'a-valid-bearer'
    gateway
      .getUserInfo(bearer)
      .then(() => {
        done.fail(`Should throw error`)
      })
      .catch((error) => {
        expect(error.status).toBe(502)
        expect(error).toBeInstanceOf(BadGatewayException)
        expect(error.message).toBe('GATEWAY_EXCEPTION_TWITTER_EXCEPTION')
        done()
      })
  })
})
