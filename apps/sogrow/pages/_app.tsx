import { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import './styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools';

const inter = Inter({ subsets: ['latin'] })

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <Head>
        <title>Sogrow • Grow your audience with confidence</title>
      </Head>
      <main className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </>
  )
}

export default CustomApp
