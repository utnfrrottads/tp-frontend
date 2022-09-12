/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { Box } from '@mui/system'
import { Star } from '@mui/icons-material'
import styles from '../../styles/Home.module.css'

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const url = process.env.NEXT_PUBLIC_API_URL

const Restaurant: NextPage = ({ restaurant: data }: any) => {
  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <div>
        <Box sx={{ marginBottom: 7 }}>
          <Box
            sx={{
              height: 233,
              background: '#22344f'
            }}
          />
          <Box
            component="img"
            sx={{
              width: 150,
              display: 'block',
              left: '132px',
              transform: 'translate(-40%, -65%)',
              position: 'absolute',
              borderRadius: '17px'
            }}
            src={data.image}
            alt={`${data.name} logo`}
          />
        </Box>

        <h1>{data.name}</h1>

        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <Star style={{ opacity: 0.55, color: '#faaf00' }} />
          <p>4.2</p> |<p>Delivery: ${data.deliveryPriceBase}</p>
        </Box>

        <p>{data.description}</p>
        <p>{data.location}</p>

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
