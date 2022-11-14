import { CheckIcon } from '@heroicons/react/24/outline'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link';

export function ConfirmSubscription() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <section className="flex flex-grow flex-col items-center justify-center text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mx-auto mt-4 max-w-sm px-4">
          <p className="sm:text-ml mb-4 text-sm text-base text-gray-500">Thank you!</p>
          <h1 className="mb-4 text-4xl font-medium text-gray-900 sm:mb-4 md:text-5xl">{"You're"} all set.</h1>
          <p className="sm:text-ml text-cs text-base text-gray-500">We are very excited that you have subscribed.</p>
          <p className="sm:text-ml text-cs text-base text-gray-500">You will hear from us as soon as possible.</p>
          <p className="sm:text-ml text-cs my-4 text-base text-gray-500">Enjoy the day.</p>
          <Link href="/" className="text-base font-medium text-gray-600 hover:text-gray-500">
            Go back home
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ConfirmSubscription
