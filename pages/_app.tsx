import React from 'react'
import { LocalSmallDomainsContextProvider } from '../src/components/Contexts/LocalSmallDomainsContextProvider'

import './index.css'

const MyApp = ({ Component, pageProps }) => <LocalSmallDomainsContextProvider>
  <Component {...pageProps} />
</LocalSmallDomainsContextProvider>

// have all components have getStaticProps() - ensure global Static Site Generation (ensure no SSR)
export async function getStaticProps(context) {
  return {
    props: {}
  }
}

export default MyApp