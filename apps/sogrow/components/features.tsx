import Image from 'next/image'
import analyze from '../public/images/landing-page/analyse.svg'
import publish from '../public/images/landing-page/publish.svg'
import engage from '../public/images/landing-page/engage.svg'
import classNames from 'classnames'

const features = [
  {
    name: 'publish',
    headline: 'Write & schedule your content ahead',
    content: 'Remove the noise and craft your feed with only the people you want to engage with.',
    summary: ['Create a feed of people', 'See their Tweets & Threads', 'Like, Reply and Share'],
    image: {
      src: publish,
      alt: '',
    },
  },
  {
    name: 'analyse',
    headline: 'See what’s working',
    content:
      'Use analytics to get rich, in-depth insights about your content. See what is resonating with your audience and double down on that.',
    summary: ['Get a detailed analytics overview', 'See your relative growth', 'Filter based on Likes, Shares, etc.'],
    image: {
      src: analyze,
      alt: '',
    },
  },
  {
    name: 'engage',
    headline: 'Engage with people you care about',
    content: 'Remove the noise and craft your feed with only the people you want to engage with.',
    summary: ['Create a feed of people', 'See their Tweets & Threads', 'Like, Reply and Share'],
    image: {
      src: engage,
      alt: '',
    },
  },
]

export function Features() {
  return (
    <section className="mx-auto mt-16 max-w-md px-4 sm:mt-12 sm:max-w-4xl lg:mt-16 lg:px-8">
      <div className="grid grid-cols-1 text-center sm:text-left">
        {features.map((feature, index) => (
          <div key={feature.name} className="mb-12 grid space-y-2 sm:grid-cols-2 sm:space-y-0 sm:space-x-8">
            <div className={classNames('relative mb-12 h-48 sm:mb-0 md:h-80', { 'sm:order-1': index % 2 != 0 })}>
              <Image src={feature.image.src} alt={feature.image.alt} fill />
            </div>
            <div className={classNames('flex flex-col justify-center justify-self-end sm:max-w-xs')}>
              <h2 className="text-xl font-medium text-gray-900 sm:text-2xl md:text-2xl">{feature.headline}</h2>
              <p className="sm:text-ml mt-4 mb-6 max-w-md text-sm text-base text-gray-500">{feature.content}</p>
              <ul className="max-w-md list-inside space-y-2 text-gray-900">
                {feature.summary.map((summary) => (
                  <li key={summary} className="flex items-center justify-center sm:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {summary}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
