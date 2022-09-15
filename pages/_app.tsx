/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { NextPage } from 'next'
import lightTheme from '../styles/theme/lightTheme'
import createEmotionCache from '../utility/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = React.useState(() => new QueryClient())
  const emotionCache = clientSideEmotionCache

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page)

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}

export default MyApp
