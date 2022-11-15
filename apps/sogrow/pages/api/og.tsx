import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const interRegular = fetch(new URL('../../public/fonts/Inter-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer())
const interBold = fetch(new URL('../../public/fonts/Inter-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer())
const bebasNeueRegular = fetch(new URL('../../public/fonts/BebasNeue-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export default async function handler() {
  const fontInterRegular = await interRegular
  const fontInterBold = await interBold
  const fontBebasNeueRegular = await bebasNeueRegular

  return new ImageResponse(
    (
      <div tw="flex h-full text-gray-900 align-center bg-neutral-900 w-full">
        <div tw="flex h-full bg-white mx-auto drop-shadow-2xl">
          <div tw="flex flex-col justify-center align-center px-8 h-full">
            <p tw="flex text-4xl" style={{ fontFamily: "'Bebas Neue'" }}>
              <span tw="text-gray-500 text-bold">So</span>
              <span tw="text-gray-900">grow</span>
            </p>
            <h1 tw="flex flex-col text-8xl">
              <span>Never</span>
              <span>Guess</span>
              <span>Again</span>
            </h1>
            <div tw="flex flex-col max-w-xs">
              <p tw="text-xl text-gray-600">Engage and grow your Twitter audience with confidence.</p>
              <p tw="text-xl text-gray-900">Start for free →</p>
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
