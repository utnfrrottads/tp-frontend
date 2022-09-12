/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const Restaurant: NextPage = ({ restaurant: data }: any) => {
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query
  const data = await fetch(
    `${url}/restaurants/${id}?detailed=true`,
    requestOptions
  ).then(res => res.json())

  return {
    props: {
      restaurant: data
    }
  }
}

export default Restaurant
