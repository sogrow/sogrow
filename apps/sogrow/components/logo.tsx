import { Bebas_Neue } from '@next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function Logo() {
  return (
    <span className={bebasNeue.className}>
      <p className="text-3xl">
      <span className="text-gray-500 text-bold">So</span>
      <span className="text-gray-900">grow</span>
    </p>
    </span>
  )
}

export default Logo
