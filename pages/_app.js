import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header user={pageProps.user} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
