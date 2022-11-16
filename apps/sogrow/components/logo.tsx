import { Bebas_Neue } from '@next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import logoPicture from '../public/images/logo.png'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export interface LogoProps {
  logoOnly?: boolean
}

export function Logo({ logoOnly = false }: LogoProps) {

  if (logoOnly) {
    return (
      <Link href="/" className="flex items-center">
        <Image className="mr-2" src={logoPicture} alt='Sogrow Logo' width={40} height={40} />
      </Link>
    )
  }

  return (
    <Link href="/" className="flex items-center">
      <Image className="mr-2" src={logoPicture} alt='Sogrow Logo' width={40} height={40} />
      <p className={`text-3xl ${bebasNeue.className}`}>
        <span className="text-bold text-gray-500">So</span>
        <span className="text-gray-900">grow</span>
      </p>
    </Link>
  )
}

export default Logo
