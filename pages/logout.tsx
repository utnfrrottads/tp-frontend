import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import withAuth from '../utils/withAuth'

const LogoutPage: NextPage<{ token: string }> = ({ token }) => {
  const url = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter()

  useEffect(() => {
    async function logout() {
      try {
        await axios.get(`${url}/users/logout`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      } catch (err) {
        console.log(err)
      } finally {
        router.push('/')
      }
    }

    logout()
  }, [])

  return <div>Loading...</div>
}

export const getServerSideProps = withAuth(
  async (auth: Auth | null, context: any) => {
    if (auth) {
      return { props: { token: context.req.cookies.token } }
    }

    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  },
  false
)

export default LogoutPage
