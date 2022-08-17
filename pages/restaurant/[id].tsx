/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import styles from '../../styles/Home.module.css'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const useRestaurantData = (id: string) => {
  return useQuery(['restaurant-query'], async () => {
    return (
      await fetch(`${url}/restaurants/${id}?detailed=true`, requestOptions)
    ).json()
  })
}

const Restaurant: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { error, data, isLoading, isError } = useRestaurantData(id as string)

  if (data === undefined || !data.name) return <span>Loading ...</span>
  if (!id || isLoading) return <span>Loading ...</span>

  if (isError) {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>{data.location}</p>
        <p>Delivery: ${data.deliveryPriceBase}</p>

        {data.tags
          ? data.tags.map((m: any) => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={m._id}>
                <p>{m.description}</p>
              </div>
            ))
          : 'No tags'}

        <div>
          {data.meals &&
            data.meals.map((m: any) => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={m._id} className={styles.card}>
                <h2>{m.name}</h2>
                <p>{m.description}</p>
                <p>${m.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurant
