import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link';

export function Custom404Page() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <section className="flex flex-grow flex-col items-center justify-center">
        <div className="bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                  <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link href="/" className="text-base font-medium text-gray-600 hover:text-gray-500">
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Custom404Page
