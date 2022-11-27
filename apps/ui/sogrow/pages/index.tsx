import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Pricing from '../components/pricing'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'

export function Index({ showLogin }) {
  return (
    <>
      <Header showSocialLogin={showLogin} />
      <Hero />
      <Features />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const showLogin = process.env?.SHOW_SOCIAL_LOGIN === 'true'
  return {
    props: {
      showLogin,
    },
  }
}

export default Index
