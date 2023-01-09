export function Hero() {
  return (
    <>
      <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center px-4 text-center sm:mt-24">
        <p className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-7xl">
          <span className="block">Never</span>
          <span className="mt-2 block sm:mt-4">Guess</span>
          <span className="mt-2 block sm:mt-4">Again</span>
        </p>
        <h1 className="mt-4 mb-4 max-w-md px-2 text-sm text-base text-gray-500 sm:mb-6 sm:text-lg md:mt-8 md:text-xl">
          Engage and grow your Twitter audience with confidence without writing into the void. Together with great UX by Julian!
        </h1>
        <a
          href="#join"
          className="w-full rounded-full border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 sm:w-fit"
        >
          Notify me
        </a>
      </section>
      <section className="mt-24 flex flex-col items-center bg-gray-100 text-center sm:mt-24">
        <div className="mx-auto max-w-md px-4 py-16">
          <h2 className="text-2xl font-medium text-gray-900 sm:text-4xl md:text-5xl">How we help you grow on Twitter</h2>
        </div>
      </section>
    </>
  )
}

export default Hero
