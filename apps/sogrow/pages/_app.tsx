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
        {/*Facebook Meta Tags*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sogrow | Engage and grow your Twitter audience organically" />
        <meta property="og:url" content="https://www.sogrow.co" />
        <meta property="og:description" content="Engage and grow your Twitter audience with confidence without writing into the void." />
        <meta property="og:image" content="https://sogrow.co/api/og" />
        <meta property="og:image:secure_url" content="https://sogrow.co/api/og" />

        {/*Twtitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sogrow.co" />
        <meta property="twitter:url" content="https://sogrow.co" />
        <meta name="twitter:title" content="Sogrow | Engage and grow your Twitter audience organically" />
        <meta name="twitter:description" content="Engage and grow your Twitter audience with confidence without writing into the void." />
        <meta name="twitter:image" content="https://sogrow.co/api/og" />

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
