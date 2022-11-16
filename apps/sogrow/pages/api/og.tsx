import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const websiteUrl = process.env.WEBSITE_URL
const interRegular = fetch(new URL('../../public/fonts/Inter-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer())
const interBold = fetch(new URL('../../public/fonts/Inter-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer())
const bebasNeueRegular = fetch(new URL('../../public/fonts/BebasNeue-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export default async function handler() {
  const fontInterRegular = await interRegular
  const fontInterBold = await interBold
  const fontBebasNeueRegular = await bebasNeueRegular

  return new ImageResponse(
    (
      <div tw="flex h-full text-gray-900 align-center bg-white w-full">
        <div tw="flex h-full mx-auto drop-shadow-2xl">
          <div tw="flex flex-col justify-center align-center px-30 h-full">
            <div tw="flex items-center">
              <img tw="mr-2 w-12 h-12" src={`${websiteUrl}/images/logo.png`} alt='Sogrow Logo' width={40} height={40} />
              <p tw="text-4xl" style={{ fontFamily: "'Bebas Neue'" }}>
                <span tw="text-bold text-gray-500">So</span>
                <span tw="text-gray-900">grow</span>
              </p>
            </div>
            <h1 tw="flex flex-col text-8xl">
              <span>Never</span>
              <span>Guess</span>
              <span>Again</span>
            </h1>
            <div tw="flex flex-col max-w-xs text-2xl text-gray-900">
              <p>Coming soon →</p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: 'Inter',
          data: fontInterRegular,
          weight: 400,
        },
        {
          name: 'Inter',
          data: fontInterBold,
          weight: 800,
        },
        {
          name: 'Bebas Neue',
          data: fontBebasNeueRegular,
          weight: 400,
        },
      ],
    },
  )
}
