import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useSubscribeToNewsletter } from '../hooks/useSubscribeToNewsletter'
import { SimpleModal } from './simpleModal'
import { useEffect, useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

interface NewsLetterFields {
  email: string
}

export function Newsletter() {
  const { isLoading, isError, isSuccess, mutate } = useSubscribeToNewsletter()
  const [open, setOpen] = useState(false)

  const getButtonText = () => {
    if (isLoading) return 'Loading'
    if (isError) return 'Try again'
    return 'Join'
  }

  const newsletterForm: FormikProps<NewsLetterFields> = useFormik<NewsLetterFields>({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: ({ email }) => {
      mutate(email)
    },
  })

  useEffect(() => {
    if (isSuccess) {
      setOpen(true)
    }
  }, [isSuccess])

  return (
    <section id="join" className="mx-auto my-16 flex max-w-md flex-col items-center px-4 text-center">
      <h2 className="mb-6 max-w-xs text-4xl font-medium text-gray-900 sm:mb-8 md:text-5xl">Join the beta</h2>
      <p className="sm:text-ml text-cs mb-8 text-base text-gray-500">
        Be the first to join the beta and get early access to Sogrow.
      </p>
      <form className="flex w-full flex-col justify-center sm:flex-row" onSubmit={newsletterForm.handleSubmit}>
        <div>
          <div className="relative mt-1 mb-2 rounded-full shadow-sm sm:mb-0 sm:mr-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              onChange={newsletterForm.handleChange}
              onBlur={newsletterForm.handleBlur}
              value={newsletterForm.values.email}
              className={classNames(
                'block w-full rounded-full border-gray-400 pl-10 focus:border-gray-700 focus:ring-gray-700 sm:w-72 sm:text-sm',
                { 'border-red-500': newsletterForm.touched.email && newsletterForm.errors.email },
              )}
              placeholder="you@example.com"
            />
            {newsletterForm.touched.email && newsletterForm.errors.email && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            )}
            {isSuccess && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
              </div>
            )}
          </div>
          {newsletterForm.touched.email && newsletterForm.errors.email && (
            <p className="mb-2 ml-4 text-left text-sm text-red-600" id="email-error">
              {newsletterForm.errors.email}
            </p>
          )}
        </div>
        <button
          disabled={isLoading || isSuccess}
          type="submit"
          className="w-full self-baseline rounded-full border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-gray-700 sm:w-fit"
        >
          {getButtonText()}
        </button>
      </form>
      <p className="sm:text-ml text-cs mt-4 text-base text-gray-500">No spam—ever.</p>
      <SimpleModal
        open={open}
        title="Check your Inbox"
        content="Thank you for subscribing and supporting Sogrow. Please confirm your subscription."
        btnText="Close"
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default Newsletter
