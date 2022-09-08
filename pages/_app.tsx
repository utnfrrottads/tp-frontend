/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import lightTheme from '../styles/theme/lightTheme'
import createEmotionCache from '../utility/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient())
  const emotionCache = clientSideEmotionCache
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}

export default MyApp
