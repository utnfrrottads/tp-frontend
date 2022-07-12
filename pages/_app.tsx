/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
