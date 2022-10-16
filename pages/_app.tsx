import React from 'react'
import './index.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

// By having all components have getStaticProps(), we force global Static Site Generation (ensure no SSR)
export async function getStaticProps(context) {
  return {
    props: {}
  }
}


export default MyApp