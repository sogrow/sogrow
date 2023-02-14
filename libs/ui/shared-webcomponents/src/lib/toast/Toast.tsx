import React from 'react'
import { useToaster } from 'react-hot-toast'
import { resolveValue } from 'react-hot-toast/headless'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useTranslation from 'next-translate/useTranslation'

export const Toast = () => {
  const { t } = useTranslation('common')
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers

  return (
    <div aria-live="assertive" className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <div
          className="fixed bottom-8 left-1/2 w-full max-w-sm -translate-y-1/2 -translate-x-1/2"
          onMouseEnter={startPause}
          onMouseLeave={endPause}
        >
          {toasts.map((toast) => {
            const offset = calculateOffset(toast, {
              reverseOrder: false,
              gutter: 8,
            })

            const ref = (el: HTMLElement | null) => {
              if (el && typeof toast.height !== 'number') {
                const height = el.getBoundingClientRect().height
                updateHeight(toast.id, height)
              }
            }

            return (
              <Transition
                key={toast.id}
                ref={ref}
                show={toast.visible}
                as="div"
                enter="transform ease-out duration-300 transition"
                enterFrom={`translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2`}
                enterTo="translate-y-20 opacity-100 sm:translate-x-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                {...toast.ariaProps}
              >
                <div className="pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {toast.type === 'success' && <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />}
                        {toast.type === 'error' && <ExclamationTriangleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />}
                      </div>
                      <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900">
                          {toast.type === 'success' && t('success')}
                          {toast.type === 'error' && t('generic_error_title')}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">{resolveValue(toast.message, toast)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Toast
