import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeneralProvider } from '../src/contexts/generalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeneralProvider>
      <Component {...pageProps} />
    </GeneralProvider>
  )

}

export default MyApp
