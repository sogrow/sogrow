import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import './styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider, useSession } from 'next-auth/react'
import { FeatureToggles } from '../config/featureToggle.type'
import FeatureToggleContext from '../context/FeatureToggleContext'

const inter = Inter({ subsets: ['latin'] })

type AppOwnProps = {
  featureToggles: FeatureToggles
}

function CustomApp({ Component, pageProps: { session, ...pageProps }, featureToggles }: AppProps & AppOwnProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  const [features] = React.useState(featureToggles)
  return (
    <>
      <Head>
        <title>Sogrow | Never Guess Again</title>
        <meta
          name="description"
          content="Engage and grow your Twitter audience with confidence without writing into the void."
          key="desc"
        />
        {/*Favico etc.*/}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/*Facebook Meta Tags*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sogrow | Never Guess Again" />
        <meta property="og:url" content="https://sogrow.co" />
        <meta property="og:description" content="Engage and grow your Twitter audience with confidence without writing into the void." />
        <meta property="og:image" content="https://sogrow.co/api/og" />
        <meta property="og:image:secure_url" content="https://sogrow.co/api/og" />

        {/*Twtitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sogrow.co" />
        <meta property="twitter:url" content="https://sogrow.co" />
        <meta name="twitter:title" content="Sogrow | Never Guess Again" />
        <meta name="twitter:description" content="Engage and grow your Twitter audience with confidence without writing into the void." />
        <meta name="twitter:image" content="https://sogrow.co/api/og" />

        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <script defer data-domain="sogrow.co" src="https://plausible.io/js/script.js"></script>
      </Head>
      <main className={inter.className}>
        <FeatureToggleContext.Provider value={features}>
          <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </SessionProvider>
        </FeatureToggleContext.Provider>
      </main>
    </>
  )
}

CustomApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
  const featureToggles: FeatureToggles = {
    useSocialLogin: process.env?.SHOW_SOCIAL_LOGIN === 'true',
  }

  return { ...ctx, featureToggles }
}

export default CustomApp
