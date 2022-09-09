import React from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import { Container } from '@mui/material'
import RestaurantCard from '../../components/RestaurantCard'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const useRestaurants = () => {
  return useQuery(['restaurants-query'], async () => {
    return (await fetch(`${url}/restaurants/`, requestOptions)).json()
  })
}

const RestaurantHomePage: NextPage = () => {
  const { error, data, isLoading, isError } = useRestaurants()

  if (isLoading) return <span>Loading ...</span>

  if (isError) return <span>Error: {(error as Error).message}</span>

  return (
    <Container maxWidth="md">
      {data &&
        data.map((restaurant: any) => (
          // eslint-disable-next-line no-underscore-dangle
          <a href={`restaurant/${restaurant._id}`}>
            <RestaurantCard restaurant={restaurant} />
          </a>
        ))}
    </Container>
  )
}

export default RestaurantHomePage
