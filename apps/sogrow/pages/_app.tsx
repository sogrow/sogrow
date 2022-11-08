import { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from '@next/font/google'
import './styles.css';

const inter = Inter()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to sogrow!</title>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
