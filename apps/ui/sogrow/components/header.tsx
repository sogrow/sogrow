import Logo from './logo'
import { Button } from '@sogrow/ui/shared-webcomponents'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export interface HeaderProps {
  showSocialLogin?: boolean
}

export function Header({ showSocialLogin = false }: HeaderProps) {
  const { data: session } = useSession()

  let socialLogin = null
  if (showSocialLogin) {
    socialLogin = (
      <>
        {!session && (
          <Button size="sm" onClick={() => signIn('twitter')}>
            Sign in
          </Button>
        )}
        {session && (
          <div className="flex items-center">
            <Button size="sm" onClick={() => signOut()}>
              Sign out
            </Button>
            <Image className="ml-2 rounded-full" src={session.user.image} alt="Avatar Image" width={40} height={40} />
          </div>
        )}
      </>
    )
  }

  return (
    <header>
      <div className="mx-auto max-w-5xl py-6 px-4 text-center sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <Logo />
        {socialLogin}
      </div>
    </header>
  )
}

export default Header
