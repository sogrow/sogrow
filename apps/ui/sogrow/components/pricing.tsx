import { useState } from 'react'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'

const priceRange = {
  0: { follower: '<10k', price: 'free forever', priceYearly: 'free forever' },
  20: { follower: '<100k', price: '$19 / mo', priceYearly: '$190 / yr' },
  40: { follower: '<200k', price: '$29 / mo', priceYearly: '$290 / yr' },
  60: { follower: '<500k', price: '$49 / mo', priceYearly: '$490 / yr' },
  80: { follower: '<1m', price: '$69 / mo', priceYearly: '$690 / yr' },
  100: { follower: '<2m', price: '$89 / mo', priceYearly: '$890 / yr' },
  120: { follower: '<5m', price: '$129 / mo', priceYearly: '$1,290 / yr' },
  140: { follower: '<10m', price: '$169 / mo', priceYearly: '$1,690 / yr' },
  160: { follower: '10m+', price: 'Contact us', priceYearly: 'Contact us' },
}

export function Pricing() {
  const [yearlyEnabled, setYearlyEnabled] = useState(false)
  const [price, updatePrice] = useState(0)

  return (
    <section>
      <div className="flex flex-col items-center bg-gray-100 text-center">
        <div className="mx-auto mt-16 max-w-sm px-4 pb-32">
          <p className="sm:text-ml mb-4 text-sm text-base text-gray-500">We grow as you grow</p>
          <h2 className="mb-6 text-4xl font-medium text-gray-900 sm:mb-8 md:text-5xl">
            Start for free. <br /> Grow together.
          </h2>
          <p className="sm:text-ml text-cs mb-2 text-base text-gray-500">
            Sogrow contains all the ingredients you need to engage and grow your audience. We charge only when you grow. The recipe to grow,
            however, is up to you—get creative.
          </p>
        </div>
      </div>
      <div className="mx-4 flex flex-col items-center sm:mx-0 sm:px-4">
        <div className="-mt-24 mb-16 w-full overflow-hidden rounded-lg bg-white p-5 shadow-md shadow sm:max-w-4xl sm:p-8">
          <div className="mb-8 flex justify-between">
            <div>
              <span className="block text-sm text-base text-gray-500">Followers</span>
              <span className="block text-xl font-medium text-gray-900">{priceRange[price].follower}</span>
            </div>
            <div className="text-right">
              <span className="block text-sm text-base text-gray-500">Your price</span>
              <span className="block text-xl font-medium text-gray-900">
                {yearlyEnabled ? priceRange[price].priceYearly : priceRange[price].price}
              </span>
            </div>
          </div>
          <input
            type="range"
            id="pricing"
            aria-label="range"
            min="0"
            max="160"
            step="20"
            value={price}
            onChange={(e) => updatePrice(Number(e.target.value))}
            className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          />
          <div className="mt-8 flex items-center justify-center space-x-3">
            <span className="text-gray-500">Monthly billing</span>
            <Switch
              checked={yearlyEnabled}
              onChange={setYearlyEnabled}
              className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <span className="sr-only">Use setting</span>
              <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
              <span
                aria-hidden="true"
                className={classNames(
                  yearlyEnabled ? 'bg-gray-700' : 'bg-gray-200',
                  'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
                )}
              />
              <span
                aria-hidden="true"
                className={classNames(
                  yearlyEnabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
                )}
              />
            </Switch>
            <div className="flex flex-col text-center sm:flex-row sm:space-x-3">
              <span className="text-gray-500">Yearly billing</span>
              <span className="inline-flex items-center rounded-full bg-gray-700 px-2.5 py-0.5 text-sm font-light text-white">
                2 months free
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
