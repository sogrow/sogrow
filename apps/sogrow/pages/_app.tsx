import { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import './styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

const inter = Inter({ subsets: ['latin'] })

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <Head>
        <title>Sogrow | Engage and grow your Twitter audience organically</title>
        <meta
          name="description"
          content="Engage and grow your Twitter audience with confidence without writing into the void."
          key="desc"
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <script defer data-domain="sogrow.co" src="https://plausible.io/js/script.js"></script>
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
