import Header from './header'
import Footer from './footer'
import { useEffect } from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('debug-screens')
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-zinc-50">
        <div className="container mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
