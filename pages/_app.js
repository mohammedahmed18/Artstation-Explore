import '../styles/globals.css'
import Navbar from '../components/navbar'
import ScrollToTop from '../components/scrollToTop'

export default function App({ Component, pageProps }) {
  return <>
   <Navbar />
      <ScrollToTop />
      <Component {...pageProps} />
  
  </>
  
}
