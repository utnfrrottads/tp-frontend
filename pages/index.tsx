import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('restaurant')
  }, [])
  return <p>Loading...</p>
}

export default Home
