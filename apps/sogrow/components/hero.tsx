export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="hidden md:absolute md:inset-y-0 md:block md:h-full md:w-full" aria-hidden="true">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={564} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <section className="mx-auto mt-24 max-w-7xl px-4 flex flex-col items-center text-center sm:mt-24">
        <p className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-7xl">
          <span className="block">Never</span>
          <span className="block mt-2 sm:mt-4">Guess</span>
          <span className="block mt-2 sm:mt-4">Again</span>
        </p>
        <h1 className="mt-4 mb-4 sm:mb-6 px-2 max-w-md text-sm text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
          Engage and grow your Twitter audience organically without writing into the void.
        </h1>
        <button
          type="button"
          className="w-full sm:w-fit rounded-full border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        >
          Notify me
        </button>
      </section>
      <section className="mt-24 flex flex-col items-center text-center bg-gray-100 sm:mt-24">
        <div className="mx-auto max-w-md px-4 py-16">
          <h2 className="text-2xl font-medium text-gray-900 sm:text-4xl md:text-5xl">
            How we help you grow on Twitter
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Hero
