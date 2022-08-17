/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import styles from '../../styles/Home.module.css'

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

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <>
      <h1>Restaurants</h1>
      <div className={styles.container}>
        {data.map((restaurant: any) => (
          // eslint-disable-next-line no-underscore-dangle
          <a key={restaurant._id} href={`restaurant/${restaurant._id}`}>
            <div className={styles.restaurantContainer}>{restaurant.name}</div>
          </a>
        ))}
      </div>
    </>
  )
}

export default RestaurantHomePage
