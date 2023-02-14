import Logo from './logo'
import { Button } from '@sogrow/ui/shared-webcomponents'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useFlags } from 'flagsmith/react'

export function Header() {
  const { data: session } = useSession()
  const flags = useFlags(['signup_enabled'])

  let socialLogin = null
  if (flags.signup_enabled.enabled) {
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
      <div className="container mx-auto flex items-center justify-between py-6 px-4 text-center">
        <Logo />
        {socialLogin}
      </div>
    </header>
  )
}

export default Header
