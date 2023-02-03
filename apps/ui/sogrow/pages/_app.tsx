import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import './styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider } from 'next-auth/react'
import flagsmith from 'flagsmith/isomorphic'
import { IState } from 'flagsmith/types'
import { FlagsmithProvider } from 'flagsmith/react'
import localFont from '@next/font/local'
import Layout from '../components/layout'
import { Flowbite } from 'flowbite-react'
import { customFlowbiteTheme } from '../theme/customFlowbiteTheme'

const inter = Inter({ subsets: ['latin'] })

const powerGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/power-grotesk/PowerGroteskTrial-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-grotesk',
})

type AppOwnProps = {
  flagsmithState: IState
}

function CustomApp({ Component, pageProps: { session, ...pageProps }, flagsmithState }: AppProps & AppOwnProps) {
  const [queryClient] = React.useState(() => new QueryClient())
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
      <div className={`${inter.className} ${powerGrotesk.variable}`}>
        <Flowbite theme={{ theme: customFlowbiteTheme }}>
          <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
            <SessionProvider session={session}>
              <QueryClientProvider client={queryClient}>
                <Layout>
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </Layout>
              </QueryClientProvider>
            </SessionProvider>
          </FlagsmithProvider>
        </Flowbite>
      </div>
    </>
  )
}

CustomApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
  await flagsmith.init({
    environmentID: process.env.FLAGSMITH_API_KEY,
  })

  return { ...ctx, flagsmithState: flagsmith.getState() }
}

export default CustomApp
