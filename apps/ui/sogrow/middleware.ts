import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const requireAuth: string[] = ['/getting-started', '/schedule']
export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const pathname = request.nextUrl.pathname

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // If there is no token and the page requires auth, redirect to login
  if (!token && requireAuth.includes(pathname)) {
    const url = new URL(`/api/auth/signin`, request.url)
    url.searchParams.set('callbackUrl', encodeURI(request.url))
    return NextResponse.redirect(url)
  }

  if (!token) {
    return res
  }

  // If the onboarding is not completed, redirect to the onboarding page
  if (!token?.user?.completedOnboarding && pathname !== '/getting-started') {
    const url = new URL(`/getting-started`, request.url)
    return NextResponse.redirect(url)
  }

  // If the onboarding is completed, redirect to the schedule page
  if (token?.user?.completedOnboarding && pathname === '/getting-started') {
    const url = new URL(`/schedule`, request.url)
    return NextResponse.redirect(url)
  }

  // If the user is logged in and on the homepage, redirect to the schedule page
  if (pathname === '/') {
    const url = new URL(`/schedule`, request.url)
    return NextResponse.redirect(url)
  }

  return res
}

export const config = {
  matcher: ['/', '/getting-started', '/schedule'],
}
