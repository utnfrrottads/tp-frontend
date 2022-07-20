/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const Restaurant: NextPage = () => {
  const router = useRouter()
  const [restaurant, setRestaurant] = useState<any>()
  const { id } = router.query

  const getRestaurant = async () => {
    const data = await fetch(
      `${url}/restaurants/${id}?detailed=true`,
      requestOptions
    ).then(res => res.json())

    return data.restaurant
  }

  useEffect(() => {
    getRestaurant().then(res => setRestaurant(res))
  }, [id])

  if (!id) {
    return null
  }

  if (!restaurant) {
    return null
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <p>{restaurant.location}</p>
        <p>Delivery: ${restaurant.deliveryPriceBase}</p>

        {restaurant.tags
          ? restaurant.tags.map((m: any) => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={m._id}>
                <p>{m.description}</p>
              </div>
            ))
          : 'No tags'}

        <div>
          {restaurant.meals &&
            restaurant.meals.map((m: any) => (
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
